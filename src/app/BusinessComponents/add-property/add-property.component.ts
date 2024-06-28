import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http'; 

interface Property {
  title: string;
  address: string;
  zip: string;
  description: string;
  price: number;
  paymentMethod: string; 
  service: string;
  images: File[];
}

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  property: Property = {
    images: [],
    title: '',
    address: '',
    zip: '',
    description: '',
    price: 0,
    paymentMethod: '',
    service: ''
  };

  imagePreviews: string[] = [];
  uploadProgress: number[] = [];
  submitting = false; 
  errorMessage: string | null = null; 

  constructor(private http: HttpClient) {}

  ngOnInit() { }

  onFileSelected(event: any) {
    const files: FileList = event.target.files;

    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (file) {

        this.property.images.push(file);
        this.uploadProgress.push(0);
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagePreviews.push(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  removeImage(index: number) {
    this.property.images.splice(index, 1);
    this.imagePreviews.splice(index, 1);
    this.uploadProgress.splice(index, 1);
  }

  onSubmit() {
    this.submitting = true;
    this.errorMessage = null;

    const formData = new FormData();

    Object.entries(this.property).forEach(([key, value]) => {
      if (key === 'images') {
        for (let i = 0; i < value.length; i++) {
          formData.append(key, value[i]);
        }
      } else {
        formData.append(key, value.toString()); 
      }
    });

    this.http.post('/your-backend-endpoint', formData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe({
      next: (_event: any) => {
        this.submitting = false;
        this.property = {
          images: [],
          title: '',
          address: '',
          zip: '',
          description: '',
          price: 0,
          paymentMethod: '',
          service: ''
        };
        this.imagePreviews = [];
        this.uploadProgress = [];
        this.errorMessage = null;
      },
      error: (_error) => {
        this.submitting = false;
        this.errorMessage = _error.error.message;
      }
    });
  }
}
