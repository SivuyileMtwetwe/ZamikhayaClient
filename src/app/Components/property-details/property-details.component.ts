import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../Services/Property/property.service';
import { Location } from '@angular/common';
import { Property } from '../../Interfaces/property';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-details.component.html',
})
export class PropertyDetailComponent implements OnInit {
  property?: Property;
  selectedImageIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.viewProperty();
  }

  addToFavList(property: Property): void {
    this.propertyService.addToFavlist(property);
    this.showSuccessAlert('Added to favorites!');
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

  goBack(): void {
    this._location.back();
  }

  viewProperty(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.propertyService.getPropertyById(id).subscribe({
      next: (data: Property) => {
        this.property = data;
      },
      error: (error) => {
        console.log('Error fetching property details:', error);
      }
    });
  }

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  scrollImages(direction: 'left' | 'right'): void {
    if (!this.property || !this.property.images) return;

    const totalImages = this.property.images.length;
    if (direction === 'left') {
      this.selectedImageIndex = (this.selectedImageIndex - 1 + totalImages) % totalImages;
    } else {
      this.selectedImageIndex = (this.selectedImageIndex + 1) % totalImages;
    }
  }
}
