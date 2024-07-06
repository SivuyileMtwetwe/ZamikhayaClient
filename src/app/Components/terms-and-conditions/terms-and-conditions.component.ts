// terms-and-conditions.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../Services/Shared/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent implements OnInit, OnDestroy {
  showModal: boolean = false;
  subscription!: Subscription;

  constructor(private router: Router, private sharedService: SharedService,  ) {}

  ngOnInit() {
    this.subscription = this.sharedService.showTerms$.subscribe(
      show => {
        this.showModal = show;
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.sharedService.setShowTerms(false);
  }

  onAccept() {
    // Handle acceptance logic here
    this.closeModal();
    this.router.navigate(['/signin']);
  }

  onDecline() {
    // Handle decline logic here
    this.closeModal();
    this.router.navigate(['/']);
  }
}