// ============================================
// UTILIDADES PARA COLORES TAILWIND Y HEX
// ============================================

/**
 * Valida si un string es un color hexadecimal válido
 */
export function isHexColor(color: string): boolean {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
}

/**
 * Valida si un string es un color de Tailwind válido
 */
export function isTailwindColor(color: string): boolean {
  const tailwindColors = [
    'slate',
    'gray',
    'zinc',
    'neutral',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
  ];
  return tailwindColors.includes(color.toLowerCase());
}

/**
 * Mapa de colores Tailwind a sus valores hexadecimales (shade 500 por defecto)
 */
export const TAILWIND_COLOR_MAP: Record<string, string> = {
  // Grays
  slate: '#64748b',
  gray: '#6b7280',
  zinc: '#71717a',
  neutral: '#737373',
  stone: '#78716c',

  // Colors
  red: '#ef4444',
  orange: '#f97316',
  amber: '#f59e0b',
  yellow: '#eab308',
  lime: '#84cc16',
  green: '#22c55e',
  emerald: '#10b981',
  teal: '#14b8a6',
  cyan: '#06b6d4',
  sky: '#0ea5e9',
  blue: '#3b82f6',
  indigo: '#6366f1',
  violet: '#8b5cf6',
  purple: '#a855f7',
  fuchsia: '#d946ef',
  pink: '#ec4899',
  rose: '#f43f5e',
};

/**
 * Mapa de colores Tailwind a diferentes shades
 */
export const TAILWIND_SHADES: Record<string, Record<number, string>> = {
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
  yellow: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
    950: '#422006',
  },
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
    950: '#3b0764',
  },
  pink: {
    50: '#fdf2f8',
    100: '#fce7f3',
    200: '#fbcfe8',
    300: '#f9a8d4',
    400: '#f472b6',
    500: '#ec4899',
    600: '#db2777',
    700: '#be185d',
    800: '#9d174d',
    900: '#831843',
    950: '#500724',
  },
  orange: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
    950: '#431407',
  },
  teal: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
    950: '#042f2e',
  },
  indigo: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
};

/**
 * Convierte un color (Tailwind o hex) a su valor hexadecimal
 * @param color - Color en formato Tailwind (ej: "red") o hexadecimal (ej: "#ff0000")
 * @param shade - Shade de Tailwind (50-950), por defecto 500
 * @returns Color en formato hexadecimal
 */
export function getColorHex(color: string, shade: number = 500): string {
  // Si ya es hexadecimal, retornarlo
  if (isHexColor(color)) {
    return color;
  }

  // Si es color de Tailwind
  const lowerColor = color.toLowerCase();
  if (isTailwindColor(lowerColor)) {
    // Intentar obtener el shade específico
    if (TAILWIND_SHADES[lowerColor] && TAILWIND_SHADES[lowerColor][shade]) {
      return TAILWIND_SHADES[lowerColor][shade];
    }
    // Fallback al color base (500)
    return TAILWIND_COLOR_MAP[lowerColor] || '#6b7280';
  }

  // Fallback a gray si no se reconoce
  console.warn(`Color no reconocido: ${color}, usando gray por defecto`);
  return '#6b7280';
}

/**
 * Obtiene las clases de Tailwind para un color
 * @param color - Color en formato Tailwind o hex
 * @param shade - Shade para el background (por defecto 200)
 * @returns Objeto con clases de Tailwind
 */
export function getTailwindClasses(
  color: string,
  shade: number = 200,
): {
  background: string;
  text: string;
  border: string;
} {
  // Si es hexadecimal, no se pueden usar clases de Tailwind
  if (isHexColor(color)) {
    return {
      background: '',
      text: '',
      border: '',
    };
  }

  // Si es color de Tailwind
  const lowerColor = color.toLowerCase();
  if (isTailwindColor(lowerColor)) {
    return {
      background: `bg-${lowerColor}-${shade}`,
      text: `text-${lowerColor}-${shade >= 500 ? '50' : '800'}`,
      border: `border-${lowerColor}-${shade}`,
    };
  }

  return {
    background: 'bg-gray-200',
    text: 'text-gray-800',
    border: 'border-gray-200',
  };
}

/**
 * Función para calcular contraste (igual que antes)
 */
export function getContrastColor(bgColor: string, shade: number = 200): string {
  // Convertir a hex primero
  const hex = getColorHex(bgColor, shade);

  // Remover el #
  const cleanHex = hex.replace('#', '');
  const fullHex =
    cleanHex.length === 3
      ? cleanHex
          .split('')
          .map((char) => char + char)
          .join('')
      : cleanHex;

  const r = parseInt(fullHex.substring(0, 2), 16);
  const g = parseInt(fullHex.substring(2, 4), 16);
  const b = parseInt(fullHex.substring(4, 6), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.5 ? '#000000' : '#ffffff';
}

/**
 * Determina si se debe usar texto claro u oscuro para un color de Tailwind
 * @param color - Color de Tailwind
 * @param shade - Shade del color
 * @returns 'light' o 'dark'
 */
export function getTailwindTextVariant(color: string, shade: number = 200): 'light' | 'dark' {
  // Para shades bajos (50-400), usar texto oscuro
  // Para shades altos (500-950), usar texto claro
  if (shade <= 400) {
    return 'dark';
  }
  return 'light';
}
