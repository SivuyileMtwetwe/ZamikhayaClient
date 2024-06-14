
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../../Services/property.service';
import { Property } from '../../Interfaces/property-interface';

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

  property: Property[] = [];
  filteredProperty: Property[] = [];

  getAllProperty(): void {
    this._propertyService.getAllProperty().subscribe({
      next: (res) => {
        this.property = res;
        this.filteredProperty = res
      },
    });
  }

  onSelect(id: string): void {
    this.router.navigate(['/zam', id]);
  }

}
