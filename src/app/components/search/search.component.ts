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
      console.log("I am loading")
  }

  public getSearchValue(value: string){
    this.searchTermEvent.emit(value);
  }

}
