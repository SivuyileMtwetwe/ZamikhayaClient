
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PropertyService } from '../../Services/Property/property.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  favListCount$ = new BehaviorSubject<number>(0);

  constructor(
    private router: Router,
    private propertyService: PropertyService
  ) {}

  ngOnInit():void{ 
    this.favListCount$ = this.propertyService.favCount
  }

  signOut() {
    console.log('User signed out');
    this.router.navigate(['/homepage']);
  }

}
