import { Component, OnInit, OnDestroy, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit, OnDestroy, AfterViewInit {
  private intervalId!: NodeJS.Timeout; 
  private carousel!: HTMLElement;

  constructor(private elementRef: ElementRef) {} 

  ngOnInit() {
  }

  ngAfterViewInit() { 
    this.carousel = this.elementRef.nativeElement.querySelector('.carousel') as HTMLElement;
    this.startCarousel(); 
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startCarousel() {
    if (!this.carousel) return; 

    let scrollAmount = 0;
    const scrollMax = this.carousel.scrollWidth - this.carousel.clientWidth;
    const step = this.carousel.clientWidth;

    this.intervalId = setInterval(() => {
      if (scrollAmount >= scrollMax) {
        scrollAmount = 10; 
      } else {
        scrollAmount += step;
      }

      this.carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }, 3000);
  }
}
