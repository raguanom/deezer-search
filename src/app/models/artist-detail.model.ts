import {JsonObject, JsonProperty} from 'json2typescript';
import { Album } from './album.model';
import { Artist } from './artist.model';
import { Track } from './track.model';


@JsonObject('artist')
export class ArtistDetail extends Artist {

    @JsonProperty('top', Track, true)
    private topTracks: Track[] = [];

    @JsonProperty('picture_big', Album, true)
    private albums: Album[] = [];

    public getTopTracks(): Track[]{
        return this.topTracks;
    }

    public getAlbums(): Album[]{
        return this.albums;
    }
}
