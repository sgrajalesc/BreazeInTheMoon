import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hotel-santa-marta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hotel-santa-marta.component.html',
  styleUrls: ['./hotel-santa-marta.component.scss']
})
export class HotelSantaMartaComponent {
  calificaciones = [
    { label: 'Limpieza', name: 'clean', checked: 4 },
    { label: 'Ubicación', name: 'location', checked: 5 },
    { label: 'Servicio', name: 'service', checked: 4 },
    { label: 'Calidad-Precio', name: 'value', checked: 4 }
  ];

  servicios = [
    'Wi-Fi gratis en todo el hotel',
    'Restaurante y bar',
    'Terraza con vistas',
    'Recepción 24 horas',
    'Habitaciones familiares',
    'Desayuno incluido',
    'Centro de buceo y actividades acuáticas',
    'Servicio de traslado',
    'Jardín'
  ];

  ubicaciones = [
    'Ubicado en Santa Marta, cerca de la playa',
    'A 1,2 km de Taganga',
    'A 2,5 km del centro histórico de Santa Marta',
    'A 17 km del Aeropuerto Internacional Simón Bolívar',
    'Acceso a actividades de buceo y snorkel'
  ];
}
