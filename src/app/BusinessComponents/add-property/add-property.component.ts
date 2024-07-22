import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PropertyService } from '../../Services/Property/property.service';
import { GetPropertyGeolocationService } from '../../Services/get-property-geolocation.service';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/Auth/auth.service';
import { finalize } from 'rxjs';
import Swal from 'sweetalert2';

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
    area: '',
    coordinates: {
      lat: 0,
      lng: 0,
    },
    bathroom: '',
    price: '',
    description: '',
    images: []
  };

  foundProperty: boolean = true;
  UIPosition: number = 0;
  imageCount: number[] = [];
  images: any = [];

  constructor(
    private propertyService: PropertyService,
    private authService: AuthService,
    private router: Router,
    private propertyGeolocation: GetPropertyGeolocationService
  ) {}

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    this.property.images.push(event.target.files[0]);
    
    reader.onload = (event: any) => {
      this.images.push(event.target.result);
    };

    reader.readAsDataURL(file);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.uploadProperty(form);
    }
  }

  GetAccuratePropertyGeolocation() {
    if (this.property.location.trim()) {
      this.propertyGeolocation.GetAddressGeolocation(this.property.location)
        .pipe(finalize(() => {
          // Hide loader if any
        })).subscribe({
          next: (data) => {
            if (data) {
              this.property.location = data.formatted_address;
              this.property.coordinates = data.geometry.location;
              this.property.area = data.formatted_address.split(',')[1];
              this.foundProperty = false;
            }
          },
          error: (error) => {
            this.showErrorAlert("We've encountered an error: " + error);
            console.error(error);
          }
        });
    }
  }

  uploadProperty(form: NgForm) {
    const formData = new FormData();
    formData.append("type", this.property.type);
    formData.append("location", this.property.location);
    formData.append("parking", this.property.parking);
    formData.append("rooms", String(this.property.rooms));
    formData.append("electricity", String(this.property.electricity));
    formData.append("area", this.property.area);
    formData.append("coordinates", JSON.stringify(this.property.coordinates));
    formData.append("bathroom", String(this.property.bathroom));
    formData.append("price", String(this.property.price));
    formData.append("description", this.property.description);

    for (let i = 0; i < this.property.images.length; i++) {
      formData.append(`images`, this.property.images[i]);
    }
     
    this.propertyService.createProperty(formData).pipe(finalize(() => {
      // Hide loader if any
    })).subscribe({
      next: (message) => {
        this.showSuccessAlert('Property added successfully');
        form.reset();
        this.property.images = [];
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.showErrorAlert(error);
      }
    });
  }

  ControlPages(MoveTo: string) {
    if (MoveTo == "next") {
      this.UIPosition += 1;
    } else {
      this.UIPosition -= 1;
    }
  }

  AddImageCount() {
    this.imageCount.push(this.imageCount.length);
  }

  private showSuccessAlert(message: string): void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });

    Toast.fire({
      icon: 'success',
      title: message
    });
  }

  private showErrorAlert(message: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message,
      timer: 4000,
      timerProgressBar: true
    });
  }
}
