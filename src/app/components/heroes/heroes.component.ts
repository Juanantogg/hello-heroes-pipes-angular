import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})

export class HeroesComponent {

  public heroes: Heroe[];

  constructor(
    private _heroesService: HeroesService,
    private router: Router,
  ) {
    this.heroes = this._heroesService.getHeroes();
  }
}
