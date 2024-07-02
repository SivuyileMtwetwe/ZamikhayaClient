import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../Services/property.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrl: './list-detail.component.css'
})
export class ListDetailComponent {
  property: any

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private _location : Location
  ) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.viewProperty(id);
    }
  }

  goBack(){
    this._location.back()
  }

  viewProperty(id: string): void {
    this.propertyService.getPropertyById(id).subscribe({
      next: (data: any[]) => {
        this.property = data;
      },
      error: (error) => {
        console.log('Error fetching property details:', error);
      }
    });
  }

}
