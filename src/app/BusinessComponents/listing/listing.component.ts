import { Component } from '@angular/core';
import { PropertyService } from '../../Services/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent {
  properties: any[] = [];

  constructor(
    private propertyService: PropertyService,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.getAllProperties();
    
  }

  onSelect(id: string): void {
    this.router.navigate(['/list-detail', id]);
  }


  getAllProperties(): void {
    this.propertyService.getAllProperties().subscribe({
      next: (res: any) => {
        this.properties = res;
      },
    });
  }
}
