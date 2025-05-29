import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection(),
    provideRouter(appRoutes),
    provideHttpClient()
  ]
};
