import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private _location: Location) { }

  onSignup() {
    // Add logic for signing up a user
    console.log('Signup form submitted');
  }

  goBack(){
    this._location.back()
  }
}
