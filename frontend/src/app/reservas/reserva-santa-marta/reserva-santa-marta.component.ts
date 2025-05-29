import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reserva-santa-marta',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './reserva-santa-marta.component.html',
  styleUrls: ['./reserva-santa-marta.component.scss']
})
export class ReservaSantaMartaComponent {
  reservaConfirmada = false;

  confirmarReserva() {
    this.reservaConfirmada = true;
  }

  salir() {
    // Redirigir a inicio/home
    window.location.href = '/';
  }
}
