import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  onSignup() {
    // Add logic for signing up a user
    console.log('Signup form submitted');
  }
}
