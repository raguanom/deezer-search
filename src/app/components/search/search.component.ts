import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    @Output() searchTermEvent = new EventEmitter<string>();

    searchValue: string = "";
    disabled: boolean = true;
    error: string = "";
    isError: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    public getSearchValue(value: string) {
        if (value !== ""){
            this.isError = false;
            this.searchTermEvent.emit(value);
        } else {
            this.error = "Please type something into the search bar";
            this.isError = true;
        }
    }

}
