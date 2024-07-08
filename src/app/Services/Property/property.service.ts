import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../Auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  
   apiUrl = 'http://localhost:5007/zam/properties';
    
   favCount = new BehaviorSubject<number>(0);
   favList: any[] =[];
  


  constructor(private _http: HttpClient, private authService: AuthService) { }

  getAllProperties():Observable<any[]> {
    return this._http.get<any[]>(this.apiUrl)
  }

  getFavlist = (): any[] => this.favList;

  addToFavlist = (property: any): void => {
    const alreadyInfavlist = this.favList.some(({ id }) => id === property.id);
    if (!alreadyInfavlist) {
      this.favList.push(property);
      
      this.favCount.next(this.favCount.value + 1);
      
    } else {
      console.log("Property already exists in favlist!");
    }
  }
  createProperty(propertyData: FormData): Observable<any> {
    return this._http.post<any>(`${this.apiUrl}`, propertyData);
  }


  getPropertyById(id: string): Observable<any> {
    return this._http.get<any>(`${this.apiUrl}/${id}`);
  }
}
