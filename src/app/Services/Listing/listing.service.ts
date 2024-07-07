import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private baseUrl = 'http://localhost:5007/zam'; 

  constructor(private http: HttpClient) {}

  getListings(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/listings`);
  }

  searchListings(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/listings?q=${query}`);
  }
}
