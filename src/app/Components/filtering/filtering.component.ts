import { Component } from '@angular/core';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrl: './filtering.component.css'
})
export class FilteringComponent {
  location: string[] = ['Nyanga', 'Samora', 'Phillippi', 'Crossroads']; 
  selectedLocation: string = ''; 
  filteredItems: any[] = []; // Array to hold filtered items
  allItems: any[] = []

  ngOnInit() {
    
  }

  onLocationChange() {
    console.log('Selected location:', this.selectedLocation);
  
  }


  filterByLocation() {
    console.log('Selected location:', this.selectedLocation);
    if (this.selectedLocation === '') {
      this.filteredItems = this.allItems;
    } else {
      this.filteredItems = this.allItems.filter(item => item.location === this.selectedLocation);
    }
  }
}