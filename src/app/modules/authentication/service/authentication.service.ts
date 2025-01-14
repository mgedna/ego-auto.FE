import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogInRequest } from '../Entities/LogInRequest';
import { SignUpRequest } from '../Entities/SignUpRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl: string = 'https://localhost:7047/api/User';

  constructor(private http: HttpClient) {}

  login(loginData: LogInRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/log-in`, loginData);
  }

  signup(registerData: SignUpRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/sign-up`, registerData);
  }
}
