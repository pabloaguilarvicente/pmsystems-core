import { Pagination } from '../../commons/api.utils';

export type ColumnAlign = 'left' | 'center' | 'right';
export type ColumnType = 'text' | 'template' | 'number' | 'date' | 'badge' | 'custom' | 'actions';

export interface Column {
  /** Campo del objeto que se mostrará en la columna */
  field: string;

  /** Texto que se muestra en el header (clave de traducción) */
  header: string;

  /** Alineación del contenido del header */
  headerAlign?: ColumnAlign;

  /** Alineación del contenido de las celdas */
  cellAlign?: ColumnAlign;

  /** Clave usada para ordenamiento (si es diferente al field) */
  sortKey?: string;

  /** Indica si la columna es ordenable */
  sortable?: boolean;

  /** Ancho de la columna (px, %, rem, etc.) */
  width?: string;

  /** Tipo de renderizado de la columna */
  type?: ColumnType;

  /** Pipe a aplicar (ej: 'date', 'currency', 'percent') */
  pipe?: string;

  /** Argumentos del pipe (ej: para fecha: 'dd MMM, y') */
  pipeArgs?: any;

  /** Propiedad anidada para badges (ej: 'role.code' para clase CSS) */
  badgeClassField?: string;

  /** Template personalizado (nombre del ng-template) */
  templateName?: string;

  /** Indica si la columna está visible */
  visible?: boolean;

  /** Función para formatear el valor antes de mostrarlo */
  formatter?: (value: any, rowData: any) => any;

  /** Función que retorna los items del menú para columnas de tipo 'actions' */
  menuItems?: (rowData: any) => any[];
}

export interface TableInput<T = any> {
  /** Columnas de la tabla */
  columns: Column[];

  /** Datos a mostrar en la tabla */
  data: T[];

  /** Estado de carga */
  loading?: boolean;

  /** Información de paginación */
  pagination?: Pagination | null;

  /** Indica si es lazy loading */
  lazy?: boolean;

  /** Indica si muestra el paginador */
  paginator?: boolean;
}

export interface TableInput<T = any> {
  columns: Column[];
  data: T[];
  loading?: boolean;
  pagination?: Pagination | null;
  lazy?: boolean;
  paginator?: boolean;
}
