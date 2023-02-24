import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OAuthService } from 'angular-oauth2-oidc';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  navbarIsOpen = false;

  constructor(private oauth: OAuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = new Date(this.oauth.getAccessTokenExpiration()) > new Date();

  }

  public logout(): void {
    this.oauth.logOut();
  }

  public toggleNavbar() {
    this.navbarIsOpen = !this.navbarIsOpen;
    let appRoot = document.getElementsByTagName("app-root")[0];
    appRoot.classList.toggle("navbar-active")
  }

  public isOpen() {
    return this.navbarIsOpen;
  }

}
