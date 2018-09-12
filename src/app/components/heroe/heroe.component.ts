import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  public heroe: Heroe;

  constructor(
    private activatedRouter: ActivatedRoute,
    private _heroesService: HeroesService,
  ) {
    this.activatedRouter.params.subscribe( params => {
      console.log( params.id );
      this.heroe = this._heroesService.getHeroe( params.id );
    } );
  }

}
