import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {
   apiUrl = 'http://localhost:5007/zam/properties'; 

  constructor(private _http: HttpClient) { }

getAllProperties():Observable<any[]> {
  return this._http.get<any[]>(this.apiUrl)
}

  getPropertyById(id: number): Observable<any> {
    return this._http.get<any>(`${this.apiUrl}/${id}`);
  }
}
