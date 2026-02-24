// server.js - JSON Server con middleware personalizado y delay
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const DELAY = 2000; // 2 segundo de delay

// Middleware para simular latencia
server.use((req, res, next) => {
    setTimeout(next, DELAY);
});

// Middleware defaults de JSON Server (CORS, logger, etc)
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Middleware para mapear parámetros de paginación
server.use((req, res, next) => {
    //  CRÍTICO: Guardar los valores ANTES de mapearlos
    req.paginationParams = {
        currentPage: parseInt(req.query.currentPage) || parseInt(req.query._page) || 1,
        pageSize: parseInt(req.query.pageSize) || parseInt(req.query._limit) || 10
    };

    // Guardar parámetros de ordenamiento personalizados
    req.customSort = {
        field: req.query.sort || req.query._sort,
        order: req.query.order || req.query._order || 'asc'
    };

    // Si vienen currentPage y pageSize, mapearlos a _page y _limit para JSON Server
    if (req.query.currentPage) {
        req.query._page = req.query.currentPage;
        delete req.query.currentPage;
    }
    if (req.query.pageSize) {
        req.query._limit = req.query.pageSize;
        delete req.query.pageSize;
    }

    // Para propiedades anidadas (ej: role.name), no pasar el sort a JSON Server
    // Lo manejaremos manualmente después
    if (req.query.sort && req.query.sort.includes('.')) {
        delete req.query._sort;
        delete req.query.sort;
        delete req.query._order;
        delete req.query.order;
    } else {
        // Mapear parámetros de ordenamiento normales
        if (req.query.sort) {
            req.query._sort = req.query.sort;
            delete req.query.sort;
        }
        if (req.query.order) {
            req.query._order = req.query.order;
            delete req.query.order;
        }
    }

    next();
});

// Usar el router de JSON Server 
server.use(router);

// Función para expandir relaciones en usuarios
const expandUserRelations = (user, db) => {
    if (!user) return user;

    const expandedUser = { ...user };

    // Expandir role
    if (user.roleId) {
        const role = db.roles.find(r => r.id === user.roleId);
        if (role) {
            expandedUser.role = role;
            delete expandedUser.roleId;
        }
    }

    // Expandir status
    if (user.statusId) {
        const status = db.statuses.find(s => s.id === user.statusId);
        if (status) {
            expandedUser.status = status;
            delete expandedUser.statusId;
        }
    }

    return expandedUser;
};

// Función para obtener valor de una propiedad anidada (ej: "role.name")
const getNestedValue = (obj, path) => {
    return path.split('.').reduce((current, prop) => current?.[prop], obj);
};

// Función para ordenar array por propiedad anidada
const sortByNestedProperty = (items, field, order = 'asc') => {
    if (!field) return items;

    return [...items].sort((a, b) => {
        const valueA = getNestedValue(a, field);
        const valueB = getNestedValue(b, field);

        // Manejar valores null/undefined
        if (valueA == null && valueB == null) return 0;
        if (valueA == null) return 1;
        if (valueB == null) return -1;

        // Comparación
        let comparison = 0;
        if (typeof valueA === 'string' && typeof valueB === 'string') {
            comparison = valueA.localeCompare(valueB);
        } else {
            comparison = valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
        }

        return order === 'desc' ? -comparison : comparison;
    });
};

// Middleware para transformar respuestas 
router.render = (req, res) => {
    // Si es una respuesta exitosa
    if (res.statusCode >= 200 && res.statusCode < 300) {
        let wrappedData;
        const db = router.db.getState();

        // Para métodos GET con múltiples resultados (lista)
        if (req.method === 'GET' && Array.isArray(res.locals.data)) {
            let items = res.locals.data;
            const totalCount = res.get('X-Total-Count');

            // Expandir relaciones si es un listado de usuarios
            if (req.path.includes('/users')) {
                items = items.map(user => expandUserRelations(user, db));

                // Aplicar ordenamiento manual si es por propiedad anidada
                if (req.customSort.field && req.customSort.field.includes('.')) {
                    items = sortByNestedProperty(items, req.customSort.field, req.customSort.order);
                }
            }

            //Usar los valores guardados en req.paginationParams
            const currentPage = req.paginationParams.currentPage;
            const pageSize = req.paginationParams.pageSize;
            const totalPages = totalCount ? Math.ceil(parseInt(totalCount) / pageSize) : 1;

            wrappedData = {
                data: items,
                pagination: totalCount ? {
                    currentPage: currentPage,
                    pageSize: pageSize,
                    totalPages: totalPages,
                    totalItems: parseInt(totalCount),
                    hasNextPage: currentPage < totalPages,
                    hasPreviousPage: currentPage > 1
                } : undefined,
                meta: {
                    timestamp: new Date().toISOString(),
                    version: '1.0.0'
                }
            };
        }
        // Para métodos GET con un solo resultado
        else if (req.method === 'GET') {
            let data = res.locals.data;

            // Expandir relaciones si es un usuario individual
            if (req.path.includes('/users/') && data && data.id) {
                data = expandUserRelations(data, db);
            }

            wrappedData = {
                data: data,
                message: 'Recurso obtenido correctamente',
                meta: {
                    timestamp: new Date().toISOString(),
                    version: '1.0.0'
                }
            };
        }
        // Para POST (crear)
        else if (req.method === 'POST') {
            let data = res.locals.data;

            // Expandir relaciones si es un usuario recién creado
            if (req.path.includes('/users') && data && data.id) {
                data = expandUserRelations(data, db);
            }

            wrappedData = {
                data: data,
                message: 'Recurso creado correctamente',
                meta: {
                    timestamp: new Date().toISOString(),
                    version: '1.0.0'
                }
            };
        }
        // Para PUT/PATCH (actualizar)
        else if (req.method === 'PUT' || req.method === 'PATCH') {
            let data = res.locals.data;

            // Expandir relaciones si es un usuario actualizado
            if (req.path.includes('/users/') && data && data.id) {
                data = expandUserRelations(data, db);
            }

            wrappedData = {
                data: data,
                message: 'Recurso actualizado correctamente',
                meta: {
                    timestamp: new Date().toISOString(),
                    version: '1.0.0'
                }
            };
        }
        // Para DELETE
        else if (req.method === 'DELETE') {
            wrappedData = {
                data: res.locals.data,
                message: 'Recurso eliminado correctamente',
                meta: {
                    timestamp: new Date().toISOString(),
                    version: '1.0.0'
                }
            };
        }
        else {
            wrappedData = res.locals.data;
        }

        // Enviar la respuesta transformada
        res.json(wrappedData);
    } else {
        // Para errores, mantener el formato original
        res.json(res.locals.data);
    }
};

// Iniciar el servidor
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`🚀 JSON Server corriendo en http://localhost:${PORT}`);
});