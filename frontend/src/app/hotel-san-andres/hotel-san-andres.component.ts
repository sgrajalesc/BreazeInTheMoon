import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalificacionesService } from '../services/calificaciones.service';

@Component({
  selector: 'app-hotel-san-andres',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hotel-san-andres.component.html',
  styleUrls: ['./hotel-san-andres.component.scss']
})
export class HotelSanAndresComponent {
  calificaciones = [
    { label: 'Limpieza', name: 'clean' },
    { label: 'Ubicación', name: 'location' },
    { label: 'Servicio', name: 'service' },
    { label: 'Calidad-Precio', name: 'value' }
  ];

constructor(private calificacionService: CalificacionesService) {}

  guardarCalificacion(criterio: string, estrellas: number) {
    this.calificacionService
      .enviarCalificacion('Hotel San Andrés', criterio, estrellas)
      .subscribe({
        next: () => console.log(`✔ Calificación de ${criterio}: ${estrellas} guardada.`),
        error: (err) => console.error(`Error al guardar calificación`, err)
      });
  }

  servicios = [
    'Wi-Fi gratis en todo el hotel',
    'Recepción 24 horas',
    'Piscina al aire libre sobre el mar',
    'Playa privada',
    'Gimnasio y centro de fitness',
    'Spa: solárium, jacuzzi y sauna',
    'Restaurantes y bares',
    'Discoteca',
    'Centro de negocios y salas de reuniones',
    'Club infantil'
  ];

  ubicaciones = [
    'A 2,2 km del Aeropuerto Internacional Gustavo Rojas Pinilla',
    'Discotk Extasis – 350 m',
    'Playa del Centro – 350 m',
    'Paintball San Andrés – 200 m',
    'Rocky Cay – 400 m',
    'Cayo Bolívar – 100 m',
    'Morgan Canyon – 250 m'
  ];
}
