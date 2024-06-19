import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../../Services/property.service';
import { Property } from '../../Interfaces/property-interface';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  // locations: string[] = ['Nyanga', 'Samora', 'Phillippi', 'Crossroads']; 
  // selectedLocation: string = ''; 
  // filteredItems: any[] = []; 
  // allItems: any[] = []
  // filteredProperty: any[] = [];
  // property: any[] = [];


  constructor(
    private propertyService: PropertyService,
    private router: Router
  ) {}

  // property: any[] = [];
  // filteredProperty: any[] = [];

  // onSelect(id: string): void {
  //   this.router.navigate(['/zam', id]);
  // }

  ngOnInit(): void {
    // this.getAllProperties();
    // console.log('hello')
  }

  // getAllProperties(): void {
  //   this._propertyService.getAllProperties().subscribe({
  //     next: (properties: any) => {
  //       this.property = properties;
  //       this.filteredProperty = properties
  //     },
    
  //   });

  // }

  // filterByLocation(location: string): any[] {  
  //   const validLocation = ['Nyanga', 'Samora', 'Phillippi', 'Crossroads'];
  //   if (!validLocation.includes(location)) {
  //     console.log("this location is not valid" + location);
  //     return [];
  //   }
  
  //   this.filteredItems = this.allItems.filter(item => item.location === location);
  //  console.log(this.filteredItems)
  //   return this.filteredItems;

  // }

}