import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  onSignin() {
    // Add logic for signing in a user
    console.log('Signin form submitted');
  }
}
