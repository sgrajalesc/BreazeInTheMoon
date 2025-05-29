import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./hoteles/hoteles.component').then(m => m.HotelesComponent)
  },

{
  path: 'hotelSanAndres',
  loadComponent: () =>
    import('./hotel-san-andres/hotel-san-andres.component').then(
      (m) => m.HotelSanAndresComponent
    ),
},

{
  path: 'hotelCartagena',
  loadComponent: () =>
    import('./hotel-cartagena/hotel-cartagena.component').then(
      (m) => m.HotelCartagenaComponent
    )
},

{
  path: 'hotelSantaMarta',
  loadComponent: () =>
    import('./hotel-santa-marta/hotel-santa-marta.component').then(
      (m) => m.HotelSantaMartaComponent
    )
},

{
  path: 'reserva-san-andres',
  loadComponent: () => import('./reservas/reserva-san-andres/reserva-san-andres.component').then(m => m.ReservaSanAndresComponent)
},

{
  path: 'reserva-cartagena',
  loadComponent: () => import('./reservas/reserva-cartagena/reserva-cartagena.component').then(m => m.ReservaCartagenaComponent)
},

{
  path: 'reserva-santa-marta',
  loadComponent: () => import('./reservas/reserva-santa-marta/reserva-santa-marta.component').then(m => m.ReservaSantaMartaComponent)
},

  { path: '**', redirectTo: 'login' }
];
