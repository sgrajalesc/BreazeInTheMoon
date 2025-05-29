import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hotel-cartagena',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hotel-cartagena.component.html',
  styleUrls: ['./hotel-cartagena.component.scss']
})
export class HotelCartagenaComponent {
  calificaciones = [
    { label: 'Limpieza', name: 'clean', checked: 4 },
    { label: 'Ubicación', name: 'location', checked: 5 },
    { label: 'Servicio', name: 'service', checked: 4 },
    { label: 'Calidad-Precio', name: 'value', checked: 4 }
  ];

  servicios = [
    'Piscina al aire libre',
    'Terraza con solárium',
    'Bar y zona de estar',
    'Wi-Fi gratis en todo el hotel',
    'Recepción 24 horas',
    'Servicio de habitaciones',
    'Estacionamiento privado',
    'Ascensor',
    'Servicio de limpieza diario'
  ];

  ubicaciones = [
    'Ubicado en Bocagrande, Cartagena de Indias',
    'A 200 metros de la playa Bocagrande',
    'A 2,2 km del Parque Bolívar y el Museo del Oro',
    'A 2,4 km del Palacio de la Inquisición',
    'A 7 km del Aeropuerto Internacional Rafael Núñez',
    'Restaurantes, bares y centros comerciales a pocos minutos'
  ];
}
