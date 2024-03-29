import { RouterModule, Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { HomeComponent } from './home/home.component';
import { RedirectComponent } from './redirect/redirect.component';
import { ArtistsEffects } from './state/artists/artists.effects';
import { TracksEffects } from './state/tracks/tracks.effects';
import { HistoryEffects } from './state/history/history.effects';
import { ArtistsComponent } from './artists/artists.component';
import { TracksComponent } from './tracks/tracks.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { AboutComponent } from './about/about.component';
import { AuthenticationGuard } from './authentication.guard';

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
    providers: [provideEffects(ArtistsEffects, TracksEffects, HistoryEffects)],
    canActivate: [AuthenticationGuard]
  },
  {
    path: "history",
    loadComponent: () => import('./history-page/history-page.component').then(mod => mod.HistoryPageComponent),
    providers: [provideEffects(HistoryEffects)],
    canActivate: [AuthenticationGuard]
  },
  {
    path: "top",
    children: [
      {
        path: "",
        redirectTo: "tracks",
        pathMatch: "full",
      },
      {
        path: "artists",
        component: ArtistsComponent
      },
      {
        path: "tracks",
        component: TracksComponent
      }
    ],
    loadComponent: () => import('./top-items/top-items.component').then(mod => mod.TopItemsComponent),
    providers: [provideEffects(ArtistsEffects, TracksEffects)],
    canActivate: [AuthenticationGuard]
  },
  {
    path: "about",
    component: AboutComponent
  }
];