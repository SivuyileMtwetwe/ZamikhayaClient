import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../../Services/property.service';
import { Property } from '../../Interfaces/property-interface';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {



  constructor(
    private propertyService: PropertyService,
    private router: Router
  ) {}



  ngOnInit(): void {
   
  }

}