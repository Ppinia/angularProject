import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthRequest } from '../model/auth-request';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private authToken: string = "";
  
  constructor(private http: HttpClient) { }
  
  getToken(): string{
    return this.authToken;
  }

  setToken(token: string) {
    this.authToken = token;
  }

  login(authRequest: AuthRequest):Observable<any>{
      return this.http.post('/api/user/login', authRequest);
  }

  register(authRequest: AuthRequest):Observable<any>{
    return this.http.post('/api/user/register', authRequest);
  }



}
