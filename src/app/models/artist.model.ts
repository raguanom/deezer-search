import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('artist')
export class Artist {

    @JsonProperty('name', String, true)
    protected name: string = "";

    @JsonProperty('picture_big', String, true)
    protected picture: string = "";

    @JsonProperty('nb_album', Number, true)
    protected numberOfAlbums: number = 0;

    @JsonProperty('nb_fan', Number, true)
    protected numberOfFans: number = 0;

    public getName(): string{
        return this.name;
    }

    public getPicture(): string{
        return this.picture;
    }

    public getNumberOfAlbums(): number{
        return this.numberOfAlbums;
    }

    public getNumberOfFans(): number{
        return this.numberOfFans;
    }
}
