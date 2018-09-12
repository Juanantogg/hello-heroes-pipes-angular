import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
} )

export class NavbarComponent {

  public mostrarBuscador: Boolean = true;

  constructor(
    private router: Router
  ) { }

  buscarPersonaje(personaje: string) {
    this.router.navigate( [ '/busqueda', personaje ] );
  }
}
