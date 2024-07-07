
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PropertyService } from '../../Services/Property/property.service';
import { AuthService } from '../../Services/Auth/auth.service'; 
import { Router } from '@angular/router';
import { GetPropertyGeolocationService } from '../../Services/get-property-geolocation.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  property: any = {
    type: '',
    location: '',
    parking: '',
    rooms: null,
    electricity: '',
    bathroom: '',
    price: null,
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
    // if (!this.authService.isAuthenticated()) {
    //   this.router.navigate(['/signin']);
    // }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.property.images.push(reader.result);
    };
    reader.readAsDataURL(file);
  }

  async onSubmit(form: NgForm) {
    if (form.valid) {
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
}