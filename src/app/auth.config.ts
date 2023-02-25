import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';

export const authCodeFlowConfig: AuthConfig = {
    issuer: 'https://accounts.spotify.com',
    redirectUri: environment.redirect_uri,
    clientId: '9e49965bc899423a99adf1dc5f0e8d2d',
    responseType: 'code',
    scope: "user-top-read user-read-recently-played",
    showDebugInformation: !environment.production,
    timeoutFactor: 0.01,
    tokenEndpoint: "https://accounts.spotify.com/api/token",
    disablePKCE: false,
    oidc: false,
    loginUrl: "https://accounts.spotify.com/authorize",
    userinfoEndpoint: "https://api.spotify.com/v1/me",
    logoutUrl: environment.redirect_uri,
};