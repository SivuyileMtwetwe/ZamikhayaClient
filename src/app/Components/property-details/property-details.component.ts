import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../Services/Property/property.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-property-detail',
  templateUrl: './property-details.component.html',
})
export class PropertyDetailComponent implements OnInit {

  property: any

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private _location : Location
  ) { }

  ngOnInit(): void {
    this.viewProperty()
  }
  addToFavList(property: any): void {
    this.propertyService.addToFavlist(property)
    console.log("Added to faves")
  }

  goBack(){
    this._location.back()
  }

  viewProperty(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
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