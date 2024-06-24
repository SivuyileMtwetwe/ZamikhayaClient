import { Component } from '@angular/core';
import { PropertyService } from '../../Services/property.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent {
  properties: any[] = [];

  constructor(
    private propertyService: PropertyService,
  ) {}

  ngOnInit(): void {
    this.getAllProperties();
    
  }

  getAllProperties(): void {
    this.propertyService.getAllProperties().subscribe({
      next: (res: any) => {
        this.properties = res;
      },
    });
  }
}
