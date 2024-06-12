import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Replace with your actual backend URL
  private baseUrl = 'http://localhost:5007/register';

  signup(name: string, email: string, password: string): Observable<any> {
    const user = { name, email, password };
    return this.http.post(this.baseUrl, user);
  }
}
