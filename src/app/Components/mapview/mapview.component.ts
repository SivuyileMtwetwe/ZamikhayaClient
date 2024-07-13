import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

import { Property } from '../../Interfaces/property';
import { PropertyService } from '../../Services/Property/property.service';
import { Router } from '@angular/router';


let map:google.maps.Map 
@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrl: './mapview.component.css'
})
export class MapviewComponent implements OnInit {
  map:any 

  constructor(
    private propertyService: PropertyService,
    private router: Router
  ) {}

async inItmap(){  const loader = new Loader({
      apiKey: "AIzaSyCplHZjrn_yIDfbzbcKr6oA4LZz-E4FAzA",
      version: "weekly",
    })
    

    loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
      map = new Map(document.getElementById("map") as HTMLElement, {
        center: {lat:-33.906918, lng:18.415735},
        zoom: 12,
        mapId: "map",
      });

      for(let property of this.filteredItems){
        const marker = new AdvancedMarkerElement({
                position:  property.coordinates,
                map: map
              });

              marker.addListener('click', (event: any) => {
              this.onSelect(property.id)
              })
      }
      
    })
    
    ;}

    filteredItems: any[] = [];
  properties: Property[] = [];
  locations: string[] = [];
filteredLocations: string[] = this.locations;

    getAllProperties(): void {
      this.propertyService.getAllProperties().subscribe({
        next: (res: Property[]) => {
          this.properties = res;
          this.filteredItems = res;
          this.extractLocations();
          this.inItmap()
        },
      });
    }

    extractLocations(): void {
      const allLocations = this.properties.map(property => property.location);
      this.locations = Array.from(new Set(allLocations)).sort();
      this.locations.unshift('All Locations');
      this.filteredLocations = this.locations;
    }

    onSelect(id: string): void {
      this.router.navigate(['/property-details', id]);
    }

  ngOnInit():void {
    this.getAllProperties()
  }




}

