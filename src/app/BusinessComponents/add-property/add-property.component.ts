import { Component } from '@angular/core';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  property = {
    title: '',
    address: '',
    zip: '',
    description: '',
    price: null,
    paymentMethod: 'pm',
    service: 'Rental',
    images: ['', '', '', '']
  };

  onSubmit() {

  }

  onFileSelected(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.property.images[index] = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}