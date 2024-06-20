
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  currentSlide: number = 0;

  slides = [
    {
      title: 'WELCOME',
      subtitle: 'Are you ready to move?',
      image: 'assets/—Pngtree—little boy holding welcome banner_6735885.png',
      description: 'Find <span>your township home</span> with us today.'
    },
    {
      title: 'EXPLORE',
      subtitle: 'Discover new places.',
      image: 'assets/—Pngtree—finding your home in mobile_13128388.png',
      description: 'Explore the best townships around you.'
    },
    {
      title: 'CONNECT',
      subtitle: 'Join our community.',
      image: 'assets/ImageToStl.com_man-doing-preparation-to-move-house-4604527-3805142.png',
      description: 'Become part of our vibrant community.'
    }
  ];

  constructor(private router: Router) {}

  skipIntro() {
    this.router.navigate(['/homepage']);
  }

  nextSlide() {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
    } else {
      this.router.navigate(['/homepage']);
    }
  }
}
