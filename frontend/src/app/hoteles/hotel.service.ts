import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private apiUrl = 'http://localhost:3002/hoteles'; // Microservicio de hoteles

  constructor(private http: HttpClient) {}

  getHoteles(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl);
  }
}
