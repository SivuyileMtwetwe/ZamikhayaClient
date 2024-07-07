// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private showTermsSubject = new BehaviorSubject<boolean>(false);
  showTerms$ = this.showTermsSubject.asObservable();

  setShowTerms(value: boolean) {
    this.showTermsSubject.next(value);
  }
}