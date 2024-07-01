import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.css'
})
export class TermsAndConditionsComponent implements OnInit {
  showModal: boolean = false;

  ngOnInit() {

  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onAccept() {
    this.closeModal();
  }

  onDecline() {
    this.closeModal();
  }
}
