import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hoteles',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.scss']
})
export class HotelesComponent {
  // Aquí más adelante podrías usar lógica para cargar hoteles dinámicamente si quieres
}
