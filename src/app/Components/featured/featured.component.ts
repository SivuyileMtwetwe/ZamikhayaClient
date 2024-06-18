import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { PropertyService } from '../../Services/property.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit, OnDestroy {
  private intervalId?: number;
  private subscription?: Subscription;
  images: string[] = [];
  
  @ViewChild('carousel', { static: true }) carousel!: ElementRef;

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.fetchProperties();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  fetchProperties(): void {
    this.subscription = this.propertyService.getAllProperties().subscribe({
      next: (properties: any[]) => {
        this.images = properties.map(property => property.images);
        if (typeof document !== 'undefined') {
          this.startCarousel();
        }
      },
      error: (error: any) => {
        console.error('Error fetching properties:', error);
      }
    });
  }

  startCarousel(): void {
    if (typeof document === 'undefined' || !this.carousel) {
      return;
    }

    const carouselElement = this.carousel.nativeElement;
    let scrollAmount = 0;
    const scrollMax = carouselElement.scrollWidth - carouselElement.clientWidth;
    const step = carouselElement.clientWidth;

    this.intervalId = window.setInterval(() => {
      if (scrollAmount >= scrollMax) {
        scrollAmount = 0;
      } else {
        scrollAmount += step;
      }
      carouselElement.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }, 3000);
  }
}
