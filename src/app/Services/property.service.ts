import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../Interfaces/property-interface';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
   apiUrl = 'http://localhost:5007/zam/properties'; 

  constructor(private _http: HttpClient) { }

getAllProperty():Observable<Property[]> {
  return this._http.get<Property[]>(this.apiUrl)
}

  getProperty(id: number): Observable<Property> {
    return this._http.get<Property>(`${this.apiUrl}/${id}`);
  }
}
