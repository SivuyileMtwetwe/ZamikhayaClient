import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../Services/property.service';
// import { Property } from '../../Interfaces/property-interface';
import { Location } from '@angular/common';


@Component({
  selector: 'app-property-detail',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailComponent implements OnInit {
  // selectedProperty?: Property;
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
  addToFavList(property: any): void {
    this.propertyService.addToFavlist(property)
  }

  goBack(){
    this._location.back()
  }

  viewProperty(id: string): void {
    this.propertyService.getPropertyById(id).subscribe({
      next: (data: any[]) => {
        this.property = data;
        console.log(data)
      },
      error: (error) => {
        console.log('Error fetching property details:', error);
      }
    });
  }

  // getProperty(): void {
  //   const propertyId = Number(this._route.snapshot.paramMap.get('id'));
  //   this._propertyService.getAllProperties().subscribe({
  //     next: (data: any[]) => {
  //       const property = data.find((el: any)=> el._id.includes(propertyId));
  //       this.selectedProperty = property
  //       console.log(data)       
  //     },
  //     error: (err) => console.error(err)
  //   });
  // }
}