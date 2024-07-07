import { Injectable } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { BehaviorSubject, Observable } from 'rxjs';
let AddressData = new BehaviorSubject<any>(null);
@Injectable({
  providedIn: 'root'
})
export class GetPropertyGeolocationService {

  constructor() { }
   geocode?:google.maps.Geocoder;

  

   GetAddressGeolocation(address:string):Observable<any>{
    const loader = new Loader({
      apiKey: "",
      version: "weekly",
    });

      loader.load().then(async () => {

      const { Geocoder } = await google.maps.importLibrary("geocoding") as google.maps.GeocodingLibrary;
      this.geocode = new Geocoder();

            await this.geocode.geocode( { 'address': address}, function(results:any, status:any) {
              if (status == 'OK') {
                  console.log(results[0].formatted_address)
                   console.log(results[0].geometry.location)
                   AddressData.next(results[0]);
                
                
              } else {
                alert('Geocode was not successful for the following reason: ' + status);
              }
            });
      // this.mapInit.mInitMap(mapLoad)
    
    })
    
    return AddressData;
  }
}
