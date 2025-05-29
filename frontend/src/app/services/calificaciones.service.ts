import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {
  private apiUrl = 'http://localhost:3001/calificaciones';

  constructor(private http: HttpClient) {}

  enviarCalificacion(hotel: string, criterio: string, estrellas: number): Observable<any> {
    return this.http.post(this.apiUrl, {
      hotel,
      criterio,
      estrellas
    });
  }
}
