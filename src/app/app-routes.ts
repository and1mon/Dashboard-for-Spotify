import { RouterModule, Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { HomeComponent } from './home/home.component';
import { RedirectComponent } from './redirect/redirect.component';
import { ArtistsEffects } from './state/artists/artists.effects';
import { TracksEffects } from './state/tracks/tracks.effects';

export const ROUTES: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "redirect",
    component: RedirectComponent,
  },
  {
    path: "home",
    loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent),
    providers: [provideEffects(ArtistsEffects, TracksEffects)],
  },
  {
    path: "top",
    loadComponent: () => import('./top-items/top-items.component').then(mod => mod.TopItemsComponent),
    providers: [provideEffects(ArtistsEffects, TracksEffects)],
  },
];