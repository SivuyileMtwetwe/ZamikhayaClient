import { Component } from '@angular/core';
import { PropertyService } from '../../Services/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one-card',
  templateUrl: './one-card.component.html',
  styleUrls: ['./one-card.component.css']
})
export class OneCardComponent {
  isLiked = false; // Initially not liked

  toggleLike() {
    this.isLiked = !this.isLiked;
  }

    constructor(
    private _propertyService: PropertyService,
    private router: Router
  ) {}

  property: any[] = [];
  filteredProperty: any[] = [];

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
  }

  // onSelect(property: any): void {
  //   this._propertyService.getPropertyById(property.id).subscribe(
  //     next: (res) => {
  //       this.property = res;
        
  //     },
  // }
}