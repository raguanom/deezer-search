import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { DeezerSearchService } from 'src/app/services/deezer-search.service';
import { JsonConvert } from 'json2typescript';
import { Album } from 'src/app/models/album.model';
import { Track } from 'src/app/models/track.model';
import { Artist } from 'src/app/models/artist.model';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit, OnChanges {

    tracks: Track[] = [];
    albums: Album[] = [];
    @Input() artistData: Artist = new Artist();
    index: number = 0;
    static INDEX_OFFSET: number = 25;
    @Output() hidePageEvent= new EventEmitter<boolean>();

    constructor(private deezerSearchService: DeezerSearchService) { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.artistData.currentValue !== "") {
            this.getTopFiveTracks(changes.artistData.currentValue.id);
            this.getArtistAlbums(changes.artistData.currentValue.id, this.index);
        }
    }

    getTopFiveTracks(id: number) {
        if (id > 0) {
            this.deezerSearchService.getArtistTopFiveTracks(id).subscribe(data => {
                const body = data.body as any;
                const jsonConvert: JsonConvert = new JsonConvert();
                this.tracks = jsonConvert.deserializeArray(body.data, Track);
                console.log(this.tracks);
            }, error => {
                console.log(`Oops! An error occured! ${error}`);
            });
        }
    }

    getArtistAlbums(id: number, index: number) {
        if (id > 0) {
            this.deezerSearchService.getArtistAlbums(id, index).subscribe(data => {
                const body = data.body as any;
                const jsonConvert: JsonConvert = new JsonConvert();
                this.albums = jsonConvert.deserializeArray(body.data, Album);
                console.log(this.albums);
            }, error => {
                console.log(`Oops! An error occured! ${error}`);
            });
        }
    }

    getPrevious() {
        if (this.index > 0) {
            this.index -= ArtistComponent.INDEX_OFFSET;
            this.albums = [];
            this.getArtistAlbums(this.artistData.getId(), this.index);
        }
    }

    getNext() {
        this.index += ArtistComponent.INDEX_OFFSET;
        this.albums = [];
        this.getArtistAlbums(this.artistData.getId(), this.index);
    }
    
    hideThisPage(){
        this.albums = [];
        this.artistData = new Artist();
        this.tracks = [];
        this.index = 0;
        this.hidePageEvent.emit(true);
    }
}
