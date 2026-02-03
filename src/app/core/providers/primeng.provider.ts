import { providePrimeNG } from 'primeng/config';
import MainPreset from '../layout/preset';

export const PROVIDE_PRIMENG = providePrimeNG({
  theme: {
    preset: MainPreset,
    options: {
      darkModeSelector: '.app-dark',
    },
  },
});
