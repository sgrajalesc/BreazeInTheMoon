import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

onSubmit() {
  // Validar que los campos no estén vacíos
  if (!this.email || !this.password) {
    alert('Por favor completa todos los campos');
    return;
  }

  const payload = {
    correo: this.email,
    contrasena: this.password
  };

  this.http.post('http://localhost:3001/usuarios/login', payload).subscribe({
    next: (res: any) => {
      if (!res || !res.id) {
        alert('Credenciales inválidas');
        return;
      }

      localStorage.setItem('usuario', JSON.stringify(res));
      this.router.navigate(['/home']);
    },
    error: (err) => {
      console.error('Error al iniciar sesión', err);
      alert('Credenciales inválidas');
    }
  });
}

}
