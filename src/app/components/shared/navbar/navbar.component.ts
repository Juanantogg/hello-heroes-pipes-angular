import { Component } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
} )

export class NavbarComponent {

  constructor(
    private _heroesService: HeroesService,
    private router: Router
  ) { }

  buscarPersonaje(personaje: string) {
    this.router.navigate( [ '/busqueda', personaje ] );
  }
}
