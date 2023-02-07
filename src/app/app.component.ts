import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './auth.config';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule]
})
export class AppComponent {
  title = 'spotistats';

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authCodeFlowConfig);

    this.oauthService.tryLoginCodeFlow()
      .then(() => {
        if (!this.oauthService.hasValidAccessToken()) {
          this.oauthService.initLoginFlow();
        }
      });

    console.log(this.oauthService.hasValidAccessToken());

  }

  public logout(): void {
    this.oauthService.logOut();
  }
}
