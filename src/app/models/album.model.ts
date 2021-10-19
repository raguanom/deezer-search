import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('album')
export class Album {

    @JsonProperty('title', String, true)
    private title: string = "";

    @JsonProperty('cover_medium', String, true)
    private cover: string = "";

    @JsonProperty('release_date', Date, true)
    private releaseDate: Date = new Date();

    public getTitle(): string{
        return this.title;
    }

    public getCover(): string{
        return this.cover;
    }

    public getReleaseDate(): Date{
        return this.releaseDate;
    }
}
