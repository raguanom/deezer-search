import { Component, Input, OnChanges, OnInit, SimpleChanges, Injectable } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, OnChanges {

    @Input() searchTerm: string = "";
    

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      //Get search here:
      console.log(JSON.stringify(changes));
      //Make api call here:
      
  }

}
