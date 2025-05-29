import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  nombre = '';
  correo = '';
  contrasena = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (!this.nombre || !this.correo || !this.contrasena) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const userData = {
      nombre: this.nombre,
      correo: this.correo,
      contrasena: this.contrasena
    };

    this.authService.register(userData).subscribe({
      next: (res: any) => {
        alert('Registro exitoso');

        // Si se devuelve token, lo guardamos y redireccionamos
        if (res.access_token) {
          localStorage.setItem('token', res.access_token);
        }

        this.router.navigate(['/home']);
      },
      error: (err: any) => {
        if (err.status === 409) {
          alert('El correo ya está registrado');
        } else {
          alert('Error al registrar usuario');
          console.error(err);
        }
      }
    });
  }
}
