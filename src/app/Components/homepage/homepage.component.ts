import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../../Services/property.service';
// import { Property } from '../../Interfaces/property-interface';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(
    private _propertyService: PropertyService,
    private router: Router
  ) {}

  property: any[] = [];
  filteredProperty: any[] = [];

  onSelect(id: string): void {
    this.router.navigate(['/zam', id]);
  }

  ngOnInit(): void {
    this.getAllProperties();
  }

  getAllProperties(): void {
    this._propertyService.getAllProperties().subscribe({
      next: (properties: any) => {
        this.property = properties;
        this.filteredProperty = properties
      },
    
    });

  }}