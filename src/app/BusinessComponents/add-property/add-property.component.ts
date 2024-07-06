import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PropertyService } from '../../Services/Property/property.service';

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
    rooms: null,
    electricity: '',
    bathroom: '',
    price: null,
    description: '',
    images: []
  };

  constructor(private propertyService: PropertyService) {}

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
      this.propertyService.addProperty(this.property).subscribe(
        response => {
          console.log('Property added successfully:', response);
          form.reset();
          this.property.images = [];
        },
        error => {
          console.error('Error adding property:', error);
        }
      );
    }
  }
}
