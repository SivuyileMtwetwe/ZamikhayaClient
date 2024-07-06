import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PropertyService } from '../../Services/Property/property.service';



@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.css'
})
export class BottomNavComponent {
  favListCount$ = new BehaviorSubject<number>(0);

  constructor(
    private router: Router,
    private propertyService: PropertyService
  ) {}

  ngOnInit():void{ 
    this.favListCount$ = this.propertyService.favCount
  }

}
