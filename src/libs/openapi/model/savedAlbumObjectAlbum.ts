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
import { ImageObject } from './imageObject';
import { CopyrightObject } from './copyrightObject';
import { AlbumBaseRestrictions } from './albumBaseRestrictions';
import { AlbumBaseExternalIds } from './albumBaseExternalIds';
import { AlbumBaseExternalUrls } from './albumBaseExternalUrls';
import { PagingSimplifiedTrackObject } from './pagingSimplifiedTrackObject';
import { ArtistObject } from './artistObject';


/**
 * Information about the album.
 */
export interface SavedAlbumObjectAlbum { 
    /**
     * The type of the album. 
     */
    album_type: SavedAlbumObjectAlbum.AlbumTypeEnum;
    /**
     * The number of tracks in the album.
     */
    total_tracks: number;
    /**
     * The markets in which the album is available: [ISO 3166-1 alpha-2 country codes](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _**NOTE**: an album is considered available in a market when at least 1 of its tracks is available in that market._ 
     */
    available_markets: Array<string>;
    external_urls: AlbumBaseExternalUrls;
    /**
     * A link to the Web API endpoint providing full details of the album. 
     */
    href: string;
    /**
     * The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the album. 
     */
    id: string;
    /**
     * The cover art for the album in various sizes, widest first. 
     */
    images: Array<ImageObject>;
    /**
     * The name of the album. In case of an album takedown, the value may be an empty string. 
     */
    name: string;
    /**
     * The date the album was first released. 
     */
    release_date: string;
    /**
     * The precision with which `release_date` value is known. 
     */
    release_date_precision: SavedAlbumObjectAlbum.ReleaseDatePrecisionEnum;
    restrictions?: AlbumBaseRestrictions;
    /**
     * The object type. 
     */
    type: SavedAlbumObjectAlbum.TypeEnum;
    /**
     * The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the album. 
     */
    uri: string;
    /**
     * The copyright statements of the album. 
     */
    copyrights?: Array<CopyrightObject>;
    external_ids?: AlbumBaseExternalIds;
    /**
     * A list of the genres the album is associated with. If not yet classified, the array is empty. 
     */
    genres?: Array<string>;
    /**
     * The label associated with the album. 
     */
    label?: string;
    /**
     * The popularity of the album. The value will be between 0 and 100, with 100 being the most popular. 
     */
    popularity?: number;
    /**
     * The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist. 
     */
    artists?: Array<ArtistObject>;
    tracks?: PagingSimplifiedTrackObject;
}
export namespace SavedAlbumObjectAlbum {
    export type AlbumTypeEnum = 'album' | 'single' | 'compilation';
    export const AlbumTypeEnum = {
        Album: 'album' as AlbumTypeEnum,
        Single: 'single' as AlbumTypeEnum,
        Compilation: 'compilation' as AlbumTypeEnum
    };
    export type ReleaseDatePrecisionEnum = 'year' | 'month' | 'day';
    export const ReleaseDatePrecisionEnum = {
        Year: 'year' as ReleaseDatePrecisionEnum,
        Month: 'month' as ReleaseDatePrecisionEnum,
        Day: 'day' as ReleaseDatePrecisionEnum
    };
    export type TypeEnum = 'album';
    export const TypeEnum = {
        Album: 'album' as TypeEnum
    };
}


