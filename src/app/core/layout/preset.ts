import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { palette } from '@primeuix/themes';

const primary = palette('#000f85');

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
        borderRadius: '0.5rem',
        borderColor: 'none',
        shadow: '0 0 20px 5px rgba(0,0,0,0.1)',
      },
      header: { padding: '0' },
    },
  },
});

export default MainPreset;
