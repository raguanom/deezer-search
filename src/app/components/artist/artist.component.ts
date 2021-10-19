import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DeezerSearchService } from 'src/app/services/deezer-search.service';
import { JsonConvert } from 'json2typescript';
import { Album } from 'src/app/models/album.model';
import { Track } from 'src/app/models/track.model';
import { Artist } from 'src/app/models/artist.model';
import {MatGridListModule} from '@angular/material/grid-list'; 

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit, OnChanges {

    tracks: Track[] = [];
    albums: Album[] = [];
    @Input() artistData: Artist = new Artist();

    constructor(private deezerSearchService: DeezerSearchService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.artistData.currentValue !== ""){
      this.getTopFiveTracks(changes.artistData.currentValue.id);
      this.getArtistAlbums(changes.artistData.currentValue.id);
    }
}

  getTopFiveTracks(id: number){
      if (id > 0){
        this.deezerSearchService.getArtistTopFiveTracks(id).subscribe(data => {
            const body = data.body as any;
            const jsonConvert: JsonConvert = new JsonConvert();
            this.tracks = jsonConvert.deserializeArray(body.data, Track);
            console.log(this.tracks);
          }, error => {
              console.log(`Oops! An error occured! ${error});
              }`);
          });
      }
  }

  getArtistAlbums(id: number){
    if (id > 0){
      this.deezerSearchService.getArtistAlbums(id).subscribe(data => {
          const body = data.body as any;
          const jsonConvert: JsonConvert = new JsonConvert();
          this.albums = jsonConvert.deserializeArray(body.data, Album);
          console.log(this.albums);
        }, error => {
            console.log(`Oops! An error occured! ${error});
            }`);
        });
    }
}

}
