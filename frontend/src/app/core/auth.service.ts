import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = `${environment.apiUrl}/usuarios`;

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  register(data: any) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }
}
