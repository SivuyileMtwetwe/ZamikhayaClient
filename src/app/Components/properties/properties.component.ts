import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../Services/Property/property.service';
import { Router } from '@angular/router';
import { Property } from '../../Interfaces/property';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  isLiked = false;
  selectedLocation: string = 'All Locations';
  selectedType: string = 'All Types';
  locations: string[] = [];
  propertyTypes: string[] = ['All Types'];
  filteredItems: Property[] = [];
  properties: Property[] = [];

  searchQuery: string = '';
  filteredLocations: string[] = this.locations;
  showDropdown: boolean = false;
  highlightedIndex: number = -1;

  constructor(
    private propertyService: PropertyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllProperties();
  }

  getAllProperties(): void {
    this.propertyService.getAllProperties().subscribe({
      next: (res: Property[]) => {
        this.properties = res;
        this.filteredItems = res;
        this.extractLocations();
        this.extractPropertyTypes();
      },
    });
  }

  extractLocations(): void {
    const allLocations = this.properties.map(property => property.area);
    this.locations = Array.from(new Set(allLocations)).sort();
    this.locations.unshift('All Locations');
    this.filteredLocations = this.locations;
  }

  extractPropertyTypes(): void {
    const allTypes = this.properties.map(property => property.type);
    this.propertyTypes = Array.from(new Set(allTypes)).sort();
    this.propertyTypes.unshift('All Types');
  }

  filterByLocation(selectedLocation: string): void {
    this.selectedLocation = selectedLocation;
    this.filterItems();
  }

  filterByType(selectedType: string): void {
    this.selectedType = selectedType;
    this.filterItems();
  }

  filterItems(): void {
    this.filteredItems = this.properties.filter(property => {
      return (this.selectedLocation === 'All Locations' || property.area === this.selectedLocation) &&
             (this.selectedType === 'All Types' || property.type === this.selectedType);
    });
  }

  filterLocations(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredLocations = this.locations.filter(location =>
      location.toLowerCase().includes(query)
    );
    this.highlightedIndex = -1;
  }

  selectLocation(location: string): void {
    this.selectedLocation = location;
    this.searchQuery = location;
    this.showDropdown = false;
    this.filterByLocation(location);
  }

  onBlur(): void {
    setTimeout(() => {
      this.showDropdown = false;
    }, 200);
  }

  onKeydown(event: KeyboardEvent): void {
    if (this.showDropdown) {
      if (event.key === 'ArrowDown') {
        this.highlightedIndex = (this.highlightedIndex + 1) % this.filteredLocations.length;
      } else if (event.key === 'ArrowUp') {
        this.highlightedIndex = (this.highlightedIndex - 1 + this.filteredLocations.length) % this.filteredLocations.length;
      } else if (event.key === 'Enter' && this.highlightedIndex >= 0) {
        this.selectLocation(this.filteredLocations[this.highlightedIndex]);
      } else if (event.key === 'Escape') {
        this.showDropdown = false;
      }
    }
  }

  onSelect(id: string): void {
    this.router.navigate(['/property-details', id]);
  }
}
