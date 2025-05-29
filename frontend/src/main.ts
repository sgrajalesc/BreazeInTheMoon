import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent,  {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(FormsModule),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
