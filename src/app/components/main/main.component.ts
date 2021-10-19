import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    artistSearch: string = "";
    hideSearch: boolean = false;
    hideSearchResults: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  getSearch(value: string){
      this.artistSearch = value;
      console.log(`From parent ${value}`);
  }

}
