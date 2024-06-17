import { Component } from '@angular/core';
import { Property } from '../../Interfaces/property-interface';
import { PropertyService } from '../../Services/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one-card',
  templateUrl: './one-card.component.html',
  styleUrl: './one-card.component.css'
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

  property: Property[] = [];
  filteredProperty: Property[] = [];

  getAllProperties(): void {
    this._propertyService.getAllProperties().subscribe({
      next: (res) => {
        this.property = res;
        this.filteredProperty = res
      },
    });
  }

  onSelect(_id: string): void {
    this.router.navigate(['/zam', _id]);
  }
}