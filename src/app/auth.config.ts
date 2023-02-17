import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
    issuer: 'https://accounts.spotify.com',
    redirectUri: window.location.origin + "/redirect",
    clientId: '',
    responseType: 'code',
    scope: "user-top-read",
    showDebugInformation: true,
    timeoutFactor: 0.01,
    tokenEndpoint: "https://accounts.spotify.com/api/token",
    disablePKCE: false,
    oidc: false,
    loginUrl: "https://accounts.spotify.com/authorize",
    userinfoEndpoint: "https://api.spotify.com/v1/me",
    logoutUrl: window.location.origin + "/redirect",
};