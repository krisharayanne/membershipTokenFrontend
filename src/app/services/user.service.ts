import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8080/api/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(baseUrl);
  }
  get(id:any) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  generateOTPAndSendMail(data:any) {
    return this.http.post(`${baseUrl}/otp`, data);
  }

  create(data:any) {
    return this.http.post(baseUrl, data);
  }

  verifyCredentials(data:any) {
    return this.http.post(`${baseUrl}/verifyCredentials`, data);
  }

  updateAccountStatus(data:any) {
    return this.http.put(`${baseUrl}/accountStatus`, data);
  }

  update(id:any, data:any) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id:any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll() {
    return this.http.delete(baseUrl);
  }
  findByFirstName(firstName:any) {
    return this.http.get(`${baseUrl}?firstName=${firstName}`);
  }
}