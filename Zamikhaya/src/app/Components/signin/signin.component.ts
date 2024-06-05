import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private _location: Location) { }
  onSignin() {
    console.log('Signin form submitted');
  }

  goBack(){
    this._location.back()
  }
}
