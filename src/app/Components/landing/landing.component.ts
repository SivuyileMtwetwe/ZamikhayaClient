import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/Auth/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  constructor(private router: Router,private auth :AuthService

  ) { }

  ngOnInit():void {
    this.logout()
  }
 

  logout(): void{
    this.auth.logout()
  }
  navigateToWelcome() {
    this.router.navigate(['/intro']);
  }
}