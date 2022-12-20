import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8080/api/jwts';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  verifyToken(data:any) {
    return this.http.post(`${baseUrl}/verifyToken`, data);
  }
}
