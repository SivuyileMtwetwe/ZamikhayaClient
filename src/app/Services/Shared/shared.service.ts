import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private showTermsSubject = new BehaviorSubject<boolean>(false);
  showTerms$ = this.showTermsSubject.asObservable();

  private termsAcceptedSubject = new BehaviorSubject<boolean>(false);
  termsAccepted$ = this.termsAcceptedSubject.asObservable();

  setShowTerms(show: boolean) {
    this.showTermsSubject.next(show);
  }

  setTermsAccepted(accepted: boolean) {
    this.termsAcceptedSubject.next(accepted);
  }
}