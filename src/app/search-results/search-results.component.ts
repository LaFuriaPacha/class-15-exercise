import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  allList: string [] = [];

  constructor(private searchHistoryService: search) { }

  ngOnInit(): void {
    this.history = this.searchHistoryService.getHistory();
    this.searchHistoryService.search.subscribe(historyArray: string[]) => {
      this.history = historyArray;
    })
  }

}
