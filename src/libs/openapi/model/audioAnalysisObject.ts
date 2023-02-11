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
import { SegmentObject } from './segmentObject';
import { TimeIntervalObject } from './timeIntervalObject';
import { SectionObject } from './sectionObject';
import { AudioAnalysisObjectMeta } from './audioAnalysisObjectMeta';
import { AudioAnalysisObjectTrack } from './audioAnalysisObjectTrack';


export interface AudioAnalysisObject { 
    meta?: AudioAnalysisObjectMeta;
    track?: AudioAnalysisObjectTrack;
    /**
     * The time intervals of the bars throughout the track. A bar (or measure) is a segment of time defined as a given number of beats.
     */
    bars?: Array<TimeIntervalObject>;
    /**
     * The time intervals of beats throughout the track. A beat is the basic time unit of a piece of music; for example, each tick of a metronome. Beats are typically multiples of tatums.
     */
    beats?: Array<TimeIntervalObject>;
    /**
     * Sections are defined by large variations in rhythm or timbre, e.g. chorus, verse, bridge, guitar solo, etc. Each section contains its own descriptions of tempo, key, mode, time_signature, and loudness.
     */
    sections?: Array<SectionObject>;
    /**
     * Each segment contains a roughly conisistent sound throughout its duration.
     */
    segments?: Array<SegmentObject>;
    /**
     * A tatum represents the lowest regular pulse train that a listener intuitively infers from the timing of perceived musical events (segments).
     */
    tatums?: Array<TimeIntervalObject>;
}

