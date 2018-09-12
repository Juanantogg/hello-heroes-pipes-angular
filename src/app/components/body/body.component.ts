import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent implements OnInit {

  public frase: any;
  public mostrar: boolean;
  public personajes: any;

  constructor() {
    this.frase = {
      frase: 'Un gran poder conlleva una gran responsabilidad',
      autor: 'Ben Parker'
    };
    this.mostrar = false;
    this.personajes = ['Iron Man', 'Hulk', 'Capitan America', 'Thor', 'Spyder Man'];
  }

  ngOnInit(): void { }
}
