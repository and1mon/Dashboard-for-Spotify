import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RedirectComponent } from './redirect/redirect.component';
import { HeaderComponent } from './atoms/header/header.component';
import { ApiModule } from 'src/libs/openapi';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RedirectComponent, RouterModule, ApiModule, HeaderComponent]
})
export class AppComponent {
  title = 'spotistats';
}
