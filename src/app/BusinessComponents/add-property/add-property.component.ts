import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PropertyService } from '../../Services/Property/property.service';
import { GetPropertyGeolocationService } from '../../Services/get-property-geolocation.service';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/Auth/auth.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  property: any = {
    type: '',
    location: '',
    parking: '',
    rooms: '',
    electricity: '',
    coordinates: {
      lat:0,
      lon:0,
    },
    bathroom: '',
    price: '',
    description: '',
    images: []
  };

  constructor(
    private propertyService: PropertyService,
    private authService: AuthService,
    private router: Router,
    private propertyGeolocation:GetPropertyGeolocationService
  ) {}

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.property.images.push(reader.result);
    };
    reader.readAsDataURL(file);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.GetAccuratePropertyGeolocation(form)
    }
  }

  GetAccuratePropertyGeolocation(form: NgForm){
    this.propertyGeolocation.GetAddressGeolocation(this.property.location).subscribe((data) => {
      
      if(data){
        this.property.location = data.formatted_address
        this.property.location = data.geometry.location
        // this.uploadProperty(form)

        console.log(this.property)
      }
    })
  }

  uploadProperty(form: NgForm){
    this.propertyService.createProperty(this.property).subscribe(
      response => {
        console.log('Property added successfully:', response);
        form.reset();
        this.property.images = [];
        this.router.navigate(['/homeview']);
      },
    );
  }
}
