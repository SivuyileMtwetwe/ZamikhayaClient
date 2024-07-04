import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../Services/Property/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {
  isLiked = false; 
  selectedLocation: string = 'All Locations';
  locations: string[] = ['All Locations','Lower-Luzuko', 'Samora Cape Town', 'Philippi', 'Crossroads']; 
  filteredItems: any[] = []; 
  properties: any[] = [];


  constructor(
    private propertyService: PropertyService,
    private router: Router
  ) {}

  onSelect(id: string): void {
    this.router.navigate(['/property-details', id]);
  }

  ngOnInit(): void {
    this.getAllProperties();
    
  }

  getAllProperties(): void {
    this.propertyService.getAllProperties().subscribe({
      next: (res: any) => {
        this.properties = res;
        this.filteredItems = res
      },
    });
  }



  filterByLocation(selectedLocation: string): any[] { 
  

    const validLocation = ['All Locations' ,'Lower-Luzuko', 'Samora Cape Town', 'Philippi', 'Crossroads'];

    
    if (!validLocation.includes(selectedLocation)) {
      console.log("this location is not valid" + "" + selectedLocation);
      return [];
    } else if (selectedLocation === "All Locations") {
      this.getAllProperties()
    }
    this.filteredItems = this.properties.filter (property => property.location === selectedLocation)
   console.log(this.filteredItems)
    return this.filteredItems; 
  }

}

