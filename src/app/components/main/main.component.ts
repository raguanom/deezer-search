import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    artistSearch: string = "";
    artist: Artist = new Artist();
    hideSearch: boolean = false;
    hideSearchResults: boolean = false;
    hideArtist: boolean = false;
    emptySearch: string = "";

    constructor() { }

    ngOnInit(): void {
        this.hideSearch = false;
        this.hideSearchResults = true;
        this.hideArtist = true;
    }

    getSearch(value: string) {
        this.artistSearch = value;
        this.hideSearch = false;
        this.hideSearchResults = false;
        this.hideArtist = true;
    }

    getArtist(value: Artist) {
        this.artist = value;
        this.hideSearch = true;
        this.hideSearchResults = true;
        this.hideArtist = false;
    }

    getHidePageEvent(value: boolean) {
        this.hideSearch = false;
        this.hideSearchResults = true;
        this.hideArtist = true;
    }

}
