import { Component } from '@angular/core';
import { User } from '../../Interfaces/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {


  constructor( private _location: Location){}

  goBack(): void {
    this._location.back();  
  }
}
