import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // IMPORTANTE
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-reserva-san-andres',
  standalone: true,
  templateUrl: './reserva-san-andres.component.html',
  styleUrls: ['./reserva-san-andres.component.scss'],
  imports: [CommonModule, FormsModule, RouterModule] // NECESARIO PARA ngModel
})
export class ReservaSanAndresComponent {
  mostrarMensaje = false;

  reserva = {
    tipoHabitacion: 'matrimonial',
    adultos: 2,
    ninos: 0,
    checkin: '',
    checkout: '',
    nombre: '',
    email: '',
    telefono: '',
    documento: '',
    servicios: {
      transporte: false,
      spa: false,
      cena: false
    },
    metodoPago: 'presencial'
  };

  constructor(private router: Router) {}

  confirmarReserva() {
    console.log('✅ Datos de la reserva:', this.reserva);
    this.mostrarMensaje = true;
  }

  salir() {
    this.router.navigate(['/home']);
  }
}
