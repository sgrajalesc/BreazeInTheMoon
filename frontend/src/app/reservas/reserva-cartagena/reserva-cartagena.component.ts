import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-reserva-cartagena',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './reserva-cartagena.component.html',
  styleUrls: ['./reserva-cartagena.component.scss']
})
export class ReservaCartagenaComponent {
  mostrarMensaje = false;
  
  reserva = {
    tipoHabitacion: 'suite_estandar',
    adultos: 2,
    ninos: 0,
    checkin: '',
    checkout: '',
    nombre: '',
    email: '',
    telefono: '',
    documento: '',
    servicios: {
      desayuno: false,
      piscina: false,
      wifi: false
    },
    metodoPago: 'presencial'
  };

  constructor(private router: Router) {}

  confirmarReserva() {
    console.log('✅ Reserva Cartagena:', this.reserva);
    this.mostrarMensaje = true;
  }

  salir() {
    this.router.navigate(['/home']);
  }
}
