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
    rooms: '',
    electricity: '',
    bathroom: '',
    price: '',
    description: '',
    images: []
  };

  constructor(private propertyService: PropertyService) {}

  onSubmit(form: NgForm) {
    const formData = new FormData();
    for (let key in this.property) {
      if (key !== 'images') {
        formData.append(key, this.property[key]);
      }
    }
    for (let i = 0; i < this.property.images.length; i++) {
      formData.append('images', this.property.images[i]);
    }

    this.propertyService.createProperty(formData).subscribe({

      next: response  => {
        console.log('Property added successfully', response);
        form.reset();
      },
      error: error => {
       console.error('Error adding property', error);
      }
  });
  }

  onFileSelected(event: any) {
    if (event.target.files) {
      for (let file of event.target.files) {
        this.property.images.push(file);
      }
    }
  }
}
