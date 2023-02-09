import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootstrapApplication } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { provideRouter } from '@angular/router';
import { ROUTES } from './app/app-routes';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideOAuthClient(),
    provideRouter(ROUTES)
  ]
});