import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../Services/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  _favList: any[] =[]
  favCount = 0;

  constructor(private propertyService: PropertyService,private router: Router) {}

  ngOnInit(): void {
    this.loadFavlist();
  }

  loadFavlist(): void {
    this._favList = this.propertyService.getFavlist();
  }
  onSelect(id: string): void {
    this.router.navigate(['/property-details', id]);
  }

}