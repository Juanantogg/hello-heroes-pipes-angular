import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  public heroes: Heroe[];
  public mostrarHeroes: Boolean = false;

  constructor(
    private _heroesServices: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(async params => {
        this.heroes = await this._heroesServices.buscarHeroe(params.id);
        if (params.id !== '') {
          this.mostrarHeroes = true;
        }
        if (this.heroes.length === 0) {
          this.mostrarHeroes = false;
        }
        console.log('3333', this.heroes, this.mostrarHeroes);
      });
  }

  moveTo(id: string) {
    this.router.navigate( [ '/heroes', id ] );
  }
}
