import { ArtistsState } from "./artists/artists.reducer";
import { HistoryState } from "./history/history.reducer";
import { TracksState } from "./tracks/tracks.reducer";

export interface AppState {
    artists: ArtistsState,
    tracks: TracksState,
    history: HistoryState
}