import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootstrapApplication } from '@angular/platform-browser';

import { HttpClient, provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { OAuthService, provideOAuthClient } from 'angular-oauth2-oidc';
import { provideRouter, Router } from '@angular/router';
import { ROUTES } from './app/app-routes';
import { SpotifyService } from './app/services/spotify.service';
import { APP_INITIALIZER, importProvidersFrom, isDevMode } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { authCodeFlowConfig } from './app/auth.config';
import { provideStore, StoreModule } from '@ngrx/store';
import { artistsReducer } from './app/state/artists/artists.reducer';
import { tracksReducer } from './app/state/tracks/tracks.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { historyReducer } from './app/state/history/history.reducer';

const initializeOAuth = (oauthService: OAuthService, router: Router) => () => {
  return new Promise(resolve => {
    oauthService.configure(authCodeFlowConfig);

    oauthService.tryLoginCodeFlow()
      .then(() => {
        if (new Date(oauthService.getAccessTokenExpiration()) < new Date()) {
          sessionStorage.setItem("path", encodeURI(window.location.pathname + window.location.search));
          router.navigate(["redirect"]).then(() => sessionStorage.setItem("redirected", "true"));
          resolve(true);
        }
        else {
          oauthService.setupAutomaticSilentRefresh();
          resolve(true);
        }

        oauthService.events.pipe(filter(e => e.type === 'token_refresh_error')).subscribe(e => {
          if (new Date(oauthService.getAccessTokenExpiration()) < new Date()) {
            sessionStorage.setItem("path", encodeURI(window.location.pathname + window.location.search))
            router.navigate(["redirect"]).then(() => sessionStorage.setItem("redirected", "true"));
          }
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
    provideStore({
      artists: artistsReducer,
      tracks: tracksReducer,
      history: historyReducer
    }),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    SpotifyService,
    OAuthService,
    Router,
    provideHttpClient(),
    provideOAuthClient(),
    provideRouter(ROUTES),
  ]
});