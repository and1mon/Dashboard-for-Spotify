import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootstrapApplication } from '@angular/platform-browser';

import { HttpClient, provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { OAuthService, provideOAuthClient } from 'angular-oauth2-oidc';
import { provideRouter, Router } from '@angular/router';
import { ROUTES } from './app/app-routes';
import { SpotifyService } from './app/services/spotify.service';
import { APP_INITIALIZER } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { authCodeFlowConfig } from './app/auth.config';

const initializeOAuth = (oauthService: OAuthService, router: Router) => () => {
  return new Promise(resolve => {
    oauthService.configure(authCodeFlowConfig);

    oauthService.tryLoginCodeFlow()
      .then(() => {
        if (!oauthService.hasValidAccessToken()) {
          sessionStorage.setItem("path", encodeURI(window.location.pathname + window.location.search));
          router.navigate(["redirect"]).then(() => sessionStorage.setItem("redirected", "true"));
          resolve(true);
        }
        else {
          oauthService.setupAutomaticSilentRefresh();
          resolve(true);
        }

        oauthService.events.pipe(filter(e => e.type === 'token_refresh_error')).subscribe(e => {
          sessionStorage.setItem("path", encodeURI(window.location.pathname + window.location.search))
          router.navigate(["redirect"]).then(() => sessionStorage.setItem("redirected", "true"));
        })
      });
  })
}



bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeOAuth,
      multi: true,
      deps: [OAuthService, Router]
    },
    SpotifyService,
    OAuthService,
    Router,
    provideHttpClient(),
    provideOAuthClient(),
    provideRouter(ROUTES),

  ]
});