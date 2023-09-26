import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(private auth: OAuthService, private router: Router) {
    }

    canActivate(): boolean {
        if (!this.auth.hasValidAccessToken()) {
            this.router.navigate(["redirect"]);
            return false;
        }

        return true;
    }
}