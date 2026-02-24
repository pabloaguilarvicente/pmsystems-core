import { definePreset, updatePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { palette } from '@primeuix/themes';
import { LOCAL_STORAGE_KEYS, PRIMARY_COLOR } from '../helpers/constant.helper';

const primary = palette(PRIMARY_COLOR);

const MainPreset = definePreset(Aura, {
  semantic: {
    primary: primary,
    colorScheme: {
      light: {
        primary: {
          color: '{primary.500}',
          contrastColor: '#ffffff',
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}',
        },
        highlight: {
          background: '{primary.50}',
          focusBackground: '{primary.100}',
          color: '{primary.700}',
          focusColor: '{primary.800}',
        },
      },
      dark: {
        primary: {
          color: '{primary.500}',
          contrastColor: '#ffffff',
          hoverColor: '{primary.300}',
          activeColor: '{primary.200}',
        },
        highlight: {
          background: 'color-mix(in srgb, {primary.400}, transparent 84%)',
          focusBackground: 'color-mix(in srgb, {primary.400}, transparent 76%)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)',
        },
      },
    },
  },
  components: {
    tooltip: {
      root: { padding: '0.2rem 0.7rem' },
    },
    drawer: {
      header: { padding: '0.5rem' },
      root: { borderColor: 'transparent' },
    },
    dialog: {
      content: { padding: '2rem' },
      root: {
        borderRadius: 'var(--border-radius)',
        borderColor: 'none',
        shadow: '0 0 20px 5px rgba(0,0,0,0.1)',
      },
      header: { padding: '0' },
    },
    button: { root: { borderRadius: 'var(--border-radius)' } },
    inputtext: { root: { borderRadius: 'var(--border-radius)' } },
    selectbutton: { root: { borderRadius: 'var(--border-radius)' } },
  },
});

export default MainPreset;

export function applyPrimaryPalette(hex: string): void {
  updatePreset({
    semantic: {
      primary: palette(hex),
    },
  });
}

export function applyPreloaderColor(): void {
  const savedSettings = localStorage.getItem(LOCAL_STORAGE_KEYS.uiSettings);
  const color = savedSettings
    ? (JSON.parse(savedSettings)?.primaryColor ?? PRIMARY_COLOR)
    : PRIMARY_COLOR;

  document.documentElement.style.setProperty('--preloader-color', color);
}
