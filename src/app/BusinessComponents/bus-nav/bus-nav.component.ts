import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-bus-nav',
  templateUrl: './bus-nav.component.html',
  styleUrl: './bus-nav.component.css'
})
export class BusNavComponent {


  constructor (
    private userService: UserService,
    private router: Router
  ) {}



  signOut() {
    console.log('User signed out');
    this.router.navigate(['/signin']);
  }

}
