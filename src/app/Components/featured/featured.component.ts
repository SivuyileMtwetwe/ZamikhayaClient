import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit, OnDestroy {
  private intervalId: any;

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCarousel() {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      let scrollAmount = 0;
      const scrollMax = carousel.scrollWidth - carousel.clientWidth;
      const step = carousel.clientWidth;

      this.intervalId = setInterval(() => {
        if (scrollAmount >= scrollMax) {
          scrollAmount = 0;
        } else {
          scrollAmount += step;
        }
        carousel.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }, 3000);
    }
  }
}
