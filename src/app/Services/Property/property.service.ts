import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../Auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  
   apiUrl = 'http://localhost:5007/zam';
    
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
 
  createProperty(property: any): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this._http.post(`${this.apiUrl}/properties`, property, { headers });
  }

  getPropertyById(id: string): Observable<any> {
    return this._http.get<any>(`${this.apiUrl}/${id}`);
  }
}
