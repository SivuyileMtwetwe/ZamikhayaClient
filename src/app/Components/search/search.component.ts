// src/app/search/search.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = '';
  items: string[] = [' ', ' '];
  filteredItems: string[] = [];

  onSearch() {
    this.filteredItems = this.items.filter(item => item.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }
}
