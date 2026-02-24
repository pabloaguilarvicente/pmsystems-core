import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { applyPreloaderColor } from './app/core/layout/preset';

applyPreloaderColor();

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
