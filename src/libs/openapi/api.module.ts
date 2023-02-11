import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { AlbumsService } from './api/albums.service';
import { ArtistsService } from './api/artists.service';
import { AudiobooksService } from './api/audiobooks.service';
import { CategoriesService } from './api/categories.service';
import { ChaptersService } from './api/chapters.service';
import { EpisodesService } from './api/episodes.service';
import { GenresService } from './api/genres.service';
import { LibraryService } from './api/library.service';
import { MarketsService } from './api/markets.service';
import { PlayerService } from './api/player.service';
import { PlaylistsService } from './api/playlists.service';
import { SearchService } from './api/search.service';
import { ShowsService } from './api/shows.service';
import { TracksService } from './api/tracks.service';
import { UsersService } from './api/users.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
