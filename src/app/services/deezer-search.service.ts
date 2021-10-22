import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DeezerSearchService {


    DEEZER_API: string = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist";

    constructor(private http: HttpClient) {
    }

    getArtistsByName(name: string) {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json');

        return this.http.get(`${this.DEEZER_API}/${name}`, {
            headers: headers,
            observe: 'response'
        });
    }

    getArtistTopFiveTracks(id: number) {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json');

        return this.http.get(`${this.DEEZER_API}/${id}/top`, {
            headers: headers,
            observe: 'response'
        });
    }

    getArtistAlbums(id: number, index: number) {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json');

        return this.http.get(`${this.DEEZER_API}/${id}/albums?index=${index}`, {
            headers: headers,
            observe: 'response'
        });
    }
}
