import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {
  constructor(private oauthService: OAuthService, private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("redirected") === "true") {
      sessionStorage.setItem("redirected", "false")
      this.oauthService.initLoginFlow();
    }
    else {
      let path = decodeURI(sessionStorage.getItem("path") || "");

      if (path === "/redirect") {
        path = "";
      }

      this.router.navigateByUrl(path)
        .then(() => {
          sessionStorage.setItem("path", "");
          sessionStorage.setItem("redirected", "true");
        });
    }
  }
}
