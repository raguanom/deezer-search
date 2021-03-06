import { Component, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { JsonConvert } from 'json2typescript';
import { Artist } from 'src/app/models/artist.model';
import { DeezerSearchService } from 'src/app/services/deezer-search.service';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, OnChanges {

    @Input() searchTerm: string = "";
    @Output() artistEvent = new EventEmitter<Artist>();
    artists: Artist = new Artist();
    isSearching: boolean = true;
    isEmptyResult: boolean = false;

    constructor(private deezerSearchService: DeezerSearchService) { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(JSON.stringify(changes));
        if (changes.searchTerm.currentValue !== "") {
            this.isSearching = true;
            this.isEmptyResult = false;
            console.log(this.isSearching);
            this.getArtistByName(changes.searchTerm.currentValue);
        }
    }

    getArtistByName(name: string) {
        this.isEmptyResult = false;
        this.deezerSearchService.getArtistsByName(name).subscribe(data => {
            this.isSearching = false;
            const body = data.body as any;
            const jsonConvert: JsonConvert = new JsonConvert();
            this.artists = jsonConvert.deserializeObject(body, Artist);
            if (this.artists.getId() === 0){
                this.isEmptyResult = true;
            }

        }, error => {
            console.log(`Oops! An error occured! ${error})}`);
        });
    }

    getArtist() {
        this.artistEvent.emit(this.artists);
    }

}
