import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    @Output() searchTermEvent = new EventEmitter<string>();

    txtSearchValue: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public getSearchValue(value: string){
    // this.txtSearchValue = (document.getElementById("txtArtistSearch") as HTMLInputElement).value;
    console.log(value)
    this.searchTermEvent.emit(value);
  }

}
