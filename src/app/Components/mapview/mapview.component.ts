import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"

let map:google.maps.Map 
@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrl: './mapview.component.css'
})
export class MapviewComponent implements OnInit {
  map:any 

async inItmap(){  const loader = new Loader({
      apiKey: "AIzaSyCplHZjrn_yIDfbzbcKr6oA4LZz-E4FAzA",
      version: "weekly",
    })
    

    loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      map = new Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        mapId: "map",
      
      } );
    });}


  ngOnInit():void {
    this.inItmap()  // Call the function after 2 seconds to avoid the map load error in the first load.
  //  setTimeout(()=>  this.inItmap(), 2000)
  }




}

