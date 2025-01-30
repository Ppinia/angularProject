import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthRequest } from '../model/auth-request';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }
  
  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem("authToken");
    }
  return null;
 }

  setToken(token: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("authToken", token);
    }
  }
  isLoggedIn(): boolean {
    return isPlatformBrowser(this.platformId) && !!localStorage.getItem ("authToken"); 
  }
    
  
  login(authRequest: AuthRequest):Observable<any>{
      return this.http.post('/api/user/login', authRequest);
  }

  register(authRequest: AuthRequest):Observable<any>{
    return this.http.post('/api/user/register', authRequest);
  }
}
