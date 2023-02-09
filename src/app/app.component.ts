import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './auth.config';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { RedirectComponent } from './redirect/redirect.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RedirectComponent, RouterModule]
})
export class AppComponent {
  title = 'spotistats';

  constructor(private oauthService: OAuthService, private router: Router) {

    new Promise(resolve => {
      this.oauthService.configure(authCodeFlowConfig);

      this.oauthService.tryLoginCodeFlow()
        .then(() => {
          if (!this.oauthService.hasValidAccessToken()) {
            sessionStorage.setItem("path", encodeURI(window.location.pathname + window.location.search));
            this.router.navigate(["redirect"]).then(() => sessionStorage.setItem("redirected", "true"));
          }
          else {
            this.oauthService.setupAutomaticSilentRefresh();
          }

          this.oauthService.events.pipe(filter(e => e.type === 'token_refresh_error')).subscribe(e => {
            sessionStorage.setItem("path", encodeURI(window.location.pathname + window.location.search))
            this.router.navigate(["redirect"]).then(() => sessionStorage.setItem("redirected", "true"));
          })

          resolve(true);
        });
    })

  }

  public logout(): void {
    this.oauthService.logOut();
  }
}
