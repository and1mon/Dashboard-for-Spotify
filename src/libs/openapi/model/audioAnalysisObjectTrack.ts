/**
 * Spotify Web API
 * You can use Spotify\'s Web API to discover music and podcasts, manage your Spotify library, control audio playback, and much more. Browse our available Web API endpoints using the sidebar at left, or via the navigation bar on top of this page on smaller screens.  In order to make successful Web API requests your app will need a valid access token. One can be obtained through <a href=\"https://developer.spotify.com/documentation/general/guides/authorization-guide/\">OAuth 2.0</a>.  The base URI for all Web API requests is `https://api.spotify.com/v1`.  Need help? See our <a href=\"https://developer.spotify.com/documentation/web-api/guides/\">Web API guides</a> for more information, or visit the <a href=\"https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer\">Spotify for Developers community forum</a> to ask questions and connect with other developers. 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface AudioAnalysisObjectTrack { 
    /**
     * The exact number of audio samples analyzed from this track. See also `analysis_sample_rate`.
     */
    num_samples?: number;
    /**
     * Length of the track in seconds.
     */
    duration?: number;
    /**
     * This field will always contain the empty string.
     */
    sample_md5?: string;
    /**
     * An offset to the start of the region of the track that was analyzed. (As the entire track is analyzed, this should always be 0.)
     */
    offset_seconds?: number;
    /**
     * The length of the region of the track was analyzed, if a subset of the track was analyzed. (As the entire track is analyzed, this should always be 0.)
     */
    window_seconds?: number;
    /**
     * The sample rate used to decode and analyze this track. May differ from the actual sample rate of this track available on Spotify.
     */
    analysis_sample_rate?: number;
    /**
     * The number of channels used for analysis. If 1, all channels are summed together to mono before analysis.
     */
    analysis_channels?: number;
    /**
     * The time, in seconds, at which the track\'s fade-in period ends. If the track has no fade-in, this will be 0.0.
     */
    end_of_fade_in?: number;
    /**
     * The time, in seconds, at which the track\'s fade-out period starts. If the track has no fade-out, this should match the track\'s length.
     */
    start_of_fade_out?: number;
    /**
     * The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db. 
     */
    loudness?: number;
    /**
     * The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration. 
     */
    tempo?: number;
    /**
     * The confidence, from 0.0 to 1.0, of the reliability of the `tempo`.
     */
    tempo_confidence?: number;
    /**
     * An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of \"3/4\", to \"7/4\".
     */
    time_signature?: number;
    /**
     * The confidence, from 0.0 to 1.0, of the reliability of the `time_signature`.
     */
    time_signature_confidence?: number;
    /**
     * The key the track is in. Integers map to pitches using standard [Pitch Class notation](https://en.wikipedia.org/wiki/Pitch_class). E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1. 
     */
    key?: number;
    /**
     * The confidence, from 0.0 to 1.0, of the reliability of the `key`.
     */
    key_confidence?: number;
    /**
     * Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0. 
     */
    mode?: number;
    /**
     * The confidence, from 0.0 to 1.0, of the reliability of the `mode`.
     */
    mode_confidence?: number;
    /**
     * An [Echo Nest Musical Fingerprint (ENMFP)](https://academiccommons.columbia.edu/doi/10.7916/D8Q248M4) codestring for this track.
     */
    codestring?: string;
    /**
     * A version number for the Echo Nest Musical Fingerprint format used in the codestring field.
     */
    code_version?: number;
    /**
     * An [EchoPrint](https://github.com/spotify/echoprint-codegen) codestring for this track.
     */
    echoprintstring?: string;
    /**
     * A version number for the EchoPrint format used in the echoprintstring field.
     */
    echoprint_version?: number;
    /**
     * A [Synchstring](https://github.com/echonest/synchdata) for this track.
     */
    synchstring?: string;
    /**
     * A version number for the Synchstring used in the synchstring field.
     */
    synch_version?: number;
    /**
     * A Rhythmstring for this track. The format of this string is similar to the Synchstring.
     */
    rhythmstring?: string;
    /**
     * A version number for the Rhythmstring used in the rhythmstring field.
     */
    rhythm_version?: number;
}

