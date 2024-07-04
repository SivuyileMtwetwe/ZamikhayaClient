import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:4200'; 

  constructor(private http: HttpClient) {}

  signIn(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }

  signUp(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, { email, password });
  }

  checkUserExists(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/user-exists?email=${email}`);
  }
}

