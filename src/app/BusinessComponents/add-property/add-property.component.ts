import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

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

  ngOnInit() {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
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
      if (key !== 'images') {
        formData.append(key, value.toString());
      }
    });

    const imageUploadObservables = this.property.images.map(file => this.uploadImage(file));

    forkJoin(imageUploadObservables)
      .pipe(
        switchMap(uploadedImages => {

          uploadedImages.forEach((imageUrl, index) => {
            formData.append(`imageUrl${index}`, imageUrl);
          });

          return this.http.post('/api/properties', formData);
        })
      )
      .subscribe({
        next: () => {
          this.submitting = false;
          this.resetForm();
        },
        error: (error) => {
          this.submitting = false;
          this.errorMessage = error.message || 'An error occurred while submitting the property.';
        }
      });
  }

  private uploadImage(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('fileImage', file);

    return this.http.post<{ Location: string }>('/api/upload-image', formData)
      .pipe(
        map(response => {
          if (response && response.Location) {
            return response.Location;
          }
          throw new Error('Image upload failed: No location returned');
        })
      );
  }

  private resetForm() {
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
  }
}