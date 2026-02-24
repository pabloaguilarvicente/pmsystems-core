import { providePrimeNG } from 'primeng/config';
import MainPreset from '../layout/preset';
import { MessageService } from 'primeng/api';

export const PROVIDE_PRIMENG = [
  providePrimeNG({
    theme: {
      preset: MainPreset,
      options: {
        darkModeSelector: '.app-dark',
      },
    },
  }),
  MessageService,
];
