import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('track')
export class Track {

    @JsonProperty('title', String, true)
    private title: string = "";

    @JsonProperty('duration', Number, true)
    private duration: number = 0;

    public getTitle(): string {
        return this.title;
    }

    public getDuration(): number {
        return this.duration;
    }

    public getDurationInMinutes(): string {
        let mins = ~~((this.duration % 3600) / 60);
        let secs = ~~this.duration % 60;

        let ret = "";

        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
    }
}
