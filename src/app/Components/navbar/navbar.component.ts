// navbar.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  signOut() {
    // Add your sign out logic here
    console.log('User signed out');
    this.router.navigate(['/homepage']);
  }
}
