import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RedirectComponent } from './redirect/redirect.component';

export const ROUTES: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "redirect",
    component: RedirectComponent
  },
  {
    path: "home",
    component: HomeComponent
  }
];
