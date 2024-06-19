import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../Services/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one-card',
  templateUrl: './one-card.component.html',
  styleUrls: ['./one-card.component.css']
})
export class OneCardComponent {
  isLiked = false; // Initially not liked
  selectedLocation: string = 'All Locations';
  locations: string[] = ['All Locations','Lower-Luzuko', 'Samora Cape Town', 'Philippi', 'Crossroads']; 
  filteredItems: any[] = []; 
  properties: any[] = [];


    constructor() {}

  @Input() properties: any[] = [];

  ngOnInit(): void {
    this.getAllProperties();
    
  }

  getAllProperties(): void {
    this._propertyService.getAllProperties().subscribe({
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

