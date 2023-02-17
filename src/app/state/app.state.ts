import { ArtistsState } from "./artists/artists.reducer";
import { TracksState } from "./tracks/tracks.reducer";

export interface AppState {
    artists: ArtistsState,
    tracks: TracksState
}