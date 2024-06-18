import { Component } from '@angular/core';
import { PropertyService } from '../../Services/property.service';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrl: './filtering.component.css'
})
export class FilteringComponent {
  locations: string[] = ['Nyanga', 'Samora', 'Phillippi', 'Crossroads']; 
  selectedLocation: string = ''; 
  filteredItems: any[] = []; // Array to hold filtered items
  allItems: any[] = []
  filteredProperty: any[] = [];
  property: any[] = [];

constructor(  
  private  _propertyService: PropertyService){}

  ngOnInit() {
    
  }

  onLocationChange() {
    console.log('Selected location:', this.selectedLocation);
  
  }

  getAllProperties(): void {
    this._propertyService.getAllProperties().subscribe({
      next: (data: any) => {
        this.allItems= data;
        this.filterByLocation = data
      }
    },
  
  )}


  filterByLocation(location: string): any[] {  
    const validLocation = ['Nyanga', 'Samora', 'Phillippi', 'Crossroads'];
    if (!validLocation.includes(location)) {
      console.log("this location is not valid" + location);
      return [];
    }
  
    this.filteredItems = this.allItems.filter(item => item.location === location);
    return this.filteredItems;
  }
}