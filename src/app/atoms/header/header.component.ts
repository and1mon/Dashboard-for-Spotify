import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;

  constructor(private oauth: OAuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = new Date(this.oauth.getAccessTokenExpiration()) > new Date();
  }

  public logout(): void {
    this.oauth.logOut();
  }

}
