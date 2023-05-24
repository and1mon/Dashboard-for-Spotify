export * from './albums.service';
import { AlbumsService } from './albums.service';
export * from './artists.service';
import { ArtistsService } from './artists.service';
export * from './audiobooks.service';
import { AudiobooksService } from './audiobooks.service';
export * from './categories.service';
import { CategoriesService } from './categories.service';
export * from './chapters.service';
import { ChaptersService } from './chapters.service';
export * from './episodes.service';
import { EpisodesService } from './episodes.service';
export * from './genres.service';
import { GenresService } from './genres.service';
export * from './library.service';
import { LibraryService } from './library.service';
export * from './markets.service';
import { MarketsService } from './markets.service';
export * from './player.service';
import { PlayerService } from './player.service';
export * from './playlists.service';
import { PlaylistsService } from './playlists.service';
export * from './search.service';
import { SearchService } from './search.service';
export * from './shows.service';
import { ShowsService } from './shows.service';
export * from './tracks.service';
import { TracksService } from './tracks.service';
export * from './users.service';
import { UsersService } from './users.service';
export const APIS = [AlbumsService, ArtistsService, AudiobooksService, CategoriesService, ChaptersService, EpisodesService, GenresService, LibraryService, MarketsService, PlayerService, PlaylistsService, SearchService, ShowsService, TracksService, UsersService];