import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { bootstrapApplication } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { provideOAuthClient } from 'angular-oauth2-oidc';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideOAuthClient()
  ]
});