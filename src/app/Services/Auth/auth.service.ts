
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Signup } from '../../Interfaces/signup';
import { Signin } from '../../Interfaces/signin';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  private baseUrl = 'http://localhost:5007/zam';

  constructor(private http: HttpClient) {}

  signIn(data:Signin): Observable<any> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`,data).pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }

  signUp(name:string, email:string,password:string): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, {name,password,email});
  }

  checkUserExists(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/user-exists?email=${email}`);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}