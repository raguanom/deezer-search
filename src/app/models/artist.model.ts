import { JsonObject, JsonProperty } from 'json2typescript';
import { Album } from './album.model';
import { Track } from './track.model';

@JsonObject('artist')
export class Artist {

    @JsonProperty('id', Number, true)
    private id: number = 0;

    @JsonProperty('name', String, true)
    private name: string = "";

    @JsonProperty('picture_xl', String, true)
    private picture: string = "";

    @JsonProperty('picture_medium', String, true)
    private pictureMedium: string = "";

    @JsonProperty('nb_album', Number, true)
    private numberOfAlbums: number = 0;

    @JsonProperty('nb_fan', Number, true)
    private numberOfFans: number = 0;

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getPicture(): string {
        return this.picture;
    }

    public getPictureMedium(): string {
        return this.pictureMedium;
    }

    public getNumberOfAlbums(): number {
        return this.numberOfAlbums;
    }

    public getNumberOfFans(): number {
        return this.numberOfFans;
    }
}
