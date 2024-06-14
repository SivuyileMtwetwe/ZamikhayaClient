import { Component } from '@angular/core';

@Component({
  selector: 'app-one-card',
  templateUrl: './one-card.component.html',
  styleUrl: './one-card.component.css'
})
export class OneCardComponent {
  isLiked = false; // Initially not liked

  toggleLike() {
    this.isLiked = !this.isLiked;
  }
}