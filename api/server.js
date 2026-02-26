// server.js - JSON Server con middleware personalizado y delay
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const DELAY = 800;

// Middleware para simular latencia
server.use((req, res, next) => {
  setTimeout(next, DELAY);
});

// Middleware defaults de JSON Server (CORS, logger, etc)
server.use(middlewares);
server.use(jsonServer.bodyParser);

// ─── Helpers ────────────────────────────────────────────────────────────────

const generateRequestId = () =>
  `req_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

// Middleware para generar requestId por request
server.use((req, res, next) => {
  req.requestId = generateRequestId();
  next();
});

const getNestedValue = (obj, path) =>
  path.split('.').reduce((cur, key) => cur?.[key], obj);

const sortByNestedProperty = (items, field, order = 'asc') => {
  if (!field) return items;
  return [...items].sort((a, b) => {
    const va = getNestedValue(a, field);
    const vb = getNestedValue(b, field);
    if (va == null && vb == null) return 0;
    if (va == null) return 1;
    if (vb == null) return -1;
    const cmp =
      typeof va === 'string' && typeof vb === 'string'
        ? va.localeCompare(vb)
        : va < vb ? -1 : va > vb ? 1 : 0;
    return order === 'desc' ? -cmp : cmp;
  });
};

const expandUserRelations = (user, db) => {
  if (!user) return user;
  const expanded = { ...user };

  if (user.roleId !== undefined) {
    const role = db.roles.find(r => r.id === user.roleId);
    if (role) { expanded.role = role; delete expanded.roleId; }
  }

  if (user.statusId !== undefined) {
    const status = db.statuses.find(s => s.id === user.statusId);
    if (status) { expanded.status = status; delete expanded.statusId; }
  }

  return expanded;
};

// ─── Filtros manuales para /users ────────────────────────────────────────────

const filterUsers = (users, query) => {
  let result = [...users];

  // ── Excluir usuarios con soft delete ──────────────────────────────────────
  result = result.filter(u => !u.deletedAt);

  // Búsqueda por texto (firstName, lastName, email, username)
  if (query.search) {
    const term = query.search.toLowerCase();
    result = result.filter(u =>
      [u.firstName, u.lastName, u.email, u.username]
        .some(f => f?.toLowerCase().includes(term))
    );
  }

  // Filtro por statusId (singular)
  if (query.statusId) {
    const id = parseInt(query.statusId);
    result = result.filter(u => u.statusId === id);
  }

  // Filtro por roleId (puede venir como roleId=1&roleId=2 → array)
  if (query.roleId) {
    const ids = Array.isArray(query.roleId)
      ? query.roleId.map(Number)
      : [Number(query.roleId)];
    result = result.filter(u => ids.includes(u.roleId));
  }

  // Filtro por rango de fechas (createdAt)
  if (query.startDate) {
    const start = new Date(query.startDate);
    result = result.filter(u => new Date(u.createdAt) >= start);
  }
  if (query.endDate) {
    const end = new Date(query.endDate);
    result = result.filter(u => new Date(u.createdAt) <= end);
  }
  // Filtro por fecha exacta
  if (query.date) {
    const day = query.date.split('T')[0];
    result = result.filter(u => u.createdAt?.startsWith(day));
  }

  return result;
};

// ─── Middleware de timestamps y soft delete ──────────────────────────────────

server.use((req, res, next) => {
  const isUserPath = req.path.match(/^\/users(\/\d+)?$/);
  if (!isUserPath) return next();

  const now = new Date().toISOString();

  // POST → asignar createdAt, updatedAt, deletedAt: null
  if (req.method === 'POST') {
    req.body.createdAt = now;
    req.body.updatedAt = now;
    req.body.deletedAt = null;

    // Generar username automático: primer nombre + primer apellido (minúsculas, sin espacios)
    if (!req.body.username && req.body.firstName && req.body.lastName) {
      const firstName = req.body.firstName.trim().split(/\s+/)[0].toLowerCase();
      const lastName = req.body.lastName.trim().split(/\s+/)[0].toLowerCase();
      req.body.username = `${firstName}${lastName}`;
    }

    return next();
  }

  // PUT / PATCH → actualizar updatedAt
  if (req.method === 'PUT' || req.method === 'PATCH') {
    req.body.updatedAt = now;
    // Asegurarse de que no se sobreescriba deletedAt si no viene en el body
    if (req.body.deletedAt === undefined) {
      const match = req.path.match(/\/users\/(\d+)/);
      if (match) {
        const db = router.db.getState();
        const existing = db.users.find(u => String(u.id) === match[1]);
        if (existing) req.body.deletedAt = existing.deletedAt ?? null;
      }
    }
    return next();
  }

  // DELETE → interceptar y hacer soft delete en lugar de borrar
  if (req.method === 'DELETE') {
    const match = req.path.match(/\/users\/(\d+)/);
    if (!match) return next();

    const db = router.db.getState();
    const userId = match[1];
    const userIndex = db.users.findIndex(u => String(u.id) === userId);

    if (userIndex === -1) {
      const catalog = ERROR_CATALOG[404];
      return res.status(404).json({
        error: {
          title: catalog.title,
          description: catalog.description,
          code: catalog.code,
          status: 404,
          statusText: HTTP_STATUS_TEXT[404],
          message: `Usuario con id '${userId}' no encontrado.`,
          url: req.originalUrl,
          timestamp: now
        }
      });
    }

    // Aplicar soft delete directamente en la DB
    router.db
      .get('users')
      .find({ id: db.users[userIndex].id })
      .assign({ deletedAt: now, updatedAt: now })
      .write();

    const updatedUser = router.db.get('users').find({ id: db.users[userIndex].id }).value();
    const expandedUser = expandUserRelations(updatedUser, router.db.getState());

    return res.json({
      data: expandedUser,
      message: 'Recurso eliminado correctamente',
      meta: {
        timestamp: now,
        requestId: req.requestId,
        version: '1.0.0'
      }
    });
  }

  next();
});

// ─── Middleware principal ────────────────────────────────────────────────────

server.use((req, res, next) => {
  const isUsers = req.path.startsWith('/users');

  // Guardar parámetros de paginación y ordenamiento
  req.paginationParams = {
    currentPage: parseInt(req.query.currentPage) || parseInt(req.query._page) || 1,
    pageSize: parseInt(req.query.pageSize) || parseInt(req.query._limit) || 10
  };

  req.customSort = {
    field: req.query.sort || req.query._sort || 'createdAt',  // ← default: createdAt
    order: req.query.order || req.query._order || 'desc'       // ← default: desc (más reciente primero)
  };

  // Para /users hacemos el filtrado manualmente, así que interceptamos aquí
  if (isUsers && req.method === 'GET' && !req.path.match(/\/users\/\d+/)) {
    const db = router.db.getState();
    const { currentPage, pageSize } = req.paginationParams;

    let users = [...db.users];

    // Aplicar filtros manuales (incluye exclusión de soft-deleted)
    users = filterUsers(users, req.query);

    // Expandir relaciones
    users = users.map(u => expandUserRelations(u, db));

    // Ordenamiento (por defecto createdAt desc)
    users = sortByNestedProperty(users, req.customSort.field, req.customSort.order);

    const totalItems = users.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const start = (currentPage - 1) * pageSize;
    const paginatedUsers = users.slice(start, start + pageSize);

    return res.json({
      data: paginatedUsers,
      pagination: {
        currentPage,
        pageSize,
        totalPages,
        totalItems,
        hasNextPage: currentPage < totalPages,
        hasPreviousPage: currentPage > 1
      },
      meta: {
        timestamp: new Date().toISOString(),
        requestId: req.requestId,
        version: '1.0.0'
      }
    });
  }

  // Mapear currentPage/pageSize → _page/_limit para el resto
  if (req.query.currentPage) { req.query._page = req.query.currentPage; delete req.query.currentPage; }
  if (req.query.pageSize) { req.query._limit = req.query.pageSize; delete req.query.pageSize; }

  if (req.query.sort && req.query.sort.includes('.')) {
    delete req.query._sort; delete req.query.sort;
    delete req.query._order; delete req.query.order;
  } else {
    if (req.query.sort) { req.query._sort = req.query.sort; delete req.query.sort; }
    if (req.query.order) { req.query._order = req.query.order; delete req.query.order; }
  }

  next();
});

server.use(router);

// ─── Render (transforma respuestas para rutas no interceptadas) ──────────────

router.render = (req, res) => {
  if (res.statusCode < 200 || res.statusCode >= 300) {
    const status = res.statusCode;
    const catalog = ERROR_CATALOG[status] || ERROR_CATALOG[500];
    return res.json({
      error: {
        title: catalog.title,
        description: catalog.description,
        code: catalog.code,
        status,
        statusText: HTTP_STATUS_TEXT[status] || 'Unknown Error',
        message: res.locals.data?.message || catalog.description,
        url: req.originalUrl,
        timestamp: new Date().toISOString()
      }
    });
  }

  const db = router.db.getState();
  const isUserPath = req.path.includes('/users');
  let wrappedData;

  // GET lista (Array)
  if (req.method === 'GET' && Array.isArray(res.locals.data)) {
    let items = res.locals.data;
    const totalCount = res.get('X-Total-Count');

    if (isUserPath) {
      items = items.map(u => expandUserRelations(u, db));
      if (req.customSort.field && req.customSort.field.includes('.')) {
        items = sortByNestedProperty(items, req.customSort.field, req.customSort.order);
      }
    }

    const { currentPage, pageSize } = req.paginationParams;
    const totalPages = totalCount ? Math.ceil(parseInt(totalCount) / pageSize) : 1;

    wrappedData = {
      data: items,
      pagination: totalCount ? {
        currentPage,
        pageSize,
        totalPages,
        totalItems: parseInt(totalCount),
        hasNextPage: currentPage < totalPages,
        hasPreviousPage: currentPage > 1
      } : undefined,
      meta: { timestamp: new Date().toISOString(), requestId: req.requestId, version: '1.0.0' }
    };
  }

  // GET individual
  else if (req.method === 'GET') {
    let data = res.locals.data;

    if (isUserPath && data && data.id) {
      data = expandUserRelations(data, db);
    }

    wrappedData = {
      data,
      message: 'Recurso obtenido correctamente',
      meta: { timestamp: new Date().toISOString(), requestId: req.requestId, version: '1.0.0' }
    };
  }

  // POST (crear)
  else if (req.method === 'POST') {
    let data = res.locals.data;

    if (isUserPath && data && data.id) {
      data = expandUserRelations(data, db);
    }

    wrappedData = {
      data,
      message: 'Recurso creado correctamente',
      meta: { timestamp: new Date().toISOString(), requestId: req.requestId, version: '1.0.0' }
    };
  }

  // PUT / PATCH (actualizar)
  else if (req.method === 'PUT' || req.method === 'PATCH') {
    let data = res.locals.data;

    if (isUserPath && data && data.id) {
      data = expandUserRelations(data, db);
    }

    wrappedData = {
      data,
      message: 'Recurso actualizado correctamente',
      meta: { timestamp: new Date().toISOString(), requestId: req.requestId, version: '1.0.0' }
    };
  }

  // DELETE (solo llegaría aquí si no fue interceptado como soft delete)
  else if (req.method === 'DELETE') {
    wrappedData = {
      data: res.locals.data,
      message: 'Recurso eliminado correctamente',
      meta: { timestamp: new Date().toISOString(), requestId: req.requestId, version: '1.0.0' }
    };
  }

  // Fallback
  else {
    wrappedData = res.locals.data;
  }

  res.json(wrappedData);
};

// ─── Middleware de errores ───────────────────────────────────────────────────

const ERROR_CATALOG = {
  400: { title: 'Solicitud incorrecta', description: 'Los datos enviados no son válidos o están incompletos.', code: 'BAD_REQUEST' },
  401: { title: 'No autorizado', description: 'Debes iniciar sesión para acceder a este recurso.', code: 'UNAUTHORIZED' },
  403: { title: 'Acceso denegado', description: 'No tienes permisos para realizar esta acción.', code: 'FORBIDDEN' },
  404: { title: 'Recurso no encontrado', description: 'El recurso solicitado no existe o fue eliminado.', code: 'NOT_FOUND' },
  405: { title: 'Método no permitido', description: 'El método HTTP utilizado no está soportado en esta ruta.', code: 'METHOD_NOT_ALLOWED' },
  409: { title: 'Conflicto', description: 'Ya existe un recurso con los mismos datos únicos.', code: 'CONFLICT' },
  422: { title: 'Entidad no procesable', description: 'Los datos enviados no pudieron ser procesados.', code: 'UNPROCESSABLE_ENTITY' },
  500: { title: 'Error interno del servidor', description: 'Ocurrió un error inesperado. Inténtalo más tarde.', code: 'INTERNAL_SERVER_ERROR' },
};

const HTTP_STATUS_TEXT = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  409: 'Conflict',
  422: 'Unprocessable Entity',
  500: 'Internal Server Error',
};

server.use((err, req, res, next) => {
  const status = err.status || err.statusCode || 500;
  const catalog = ERROR_CATALOG[status] || ERROR_CATALOG[500];

  res.status(status).json({
    error: {
      title: catalog.title,
      description: catalog.description,
      code: catalog.code,
      status,
      statusText: HTTP_STATUS_TEXT[status] || 'Unknown Error',
      message: err.message || catalog.description,
      url: req.originalUrl,
      timestamp: new Date().toISOString()
    }
  });
});

// Interceptar 404 de rutas no existentes
server.use((req, res) => {
  const catalog = ERROR_CATALOG[404];
  res.status(404).json({
    error: {
      title: catalog.title,
      description: catalog.description,
      code: catalog.code,
      status: 404,
      statusText: HTTP_STATUS_TEXT[404],
      message: `La ruta '${req.originalUrl}' no existe.`,
      url: req.originalUrl,
      timestamp: new Date().toISOString()
    }
  });
});

// ─── Start ───────────────────────────────────────────────────────────────────

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 JSON Server corriendo en http://localhost:${PORT}`);
});