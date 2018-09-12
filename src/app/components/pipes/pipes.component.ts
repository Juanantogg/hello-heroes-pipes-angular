import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html'
})
export class PipesComponent implements OnInit {

  public nombre: String = 'Juan Antonio';
  public nombreRaro: String = 'jUaN AnTonIo garcIA GUIlleN';
  public numeros: Array<Number> = [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  public PI: Number = Math.PI;
  public numero: Number = 0.654;
  public salario: Number = 1234.5;
  public heroe: Heroe = {
    nombre: 'Iron Man',
    bio: 'El hombre de acero',
    img: 'http://alguna-imagen-de-iron-man.com',
    aparicion: '01-03-1963',
    casa: 'Marvel'
  };
  public heroes: Heroe[] = [
    {
      nombre: 'Iron Man',
      bio: 'El hombre de acero',
      img: 'http://alguna-imagen-de-iron-man.com',
      aparicion: '01-03-1963',
      casa: 'Marvel'
    },
    {
      nombre: 'Iron Man',
      bio: 'El hombre de acero',
      img: 'http://alguna-imagen-de-iron-man.com',
      aparicion: '01-03-1963',
      casa: 'Marvel'
    },
    {
      nombre: 'Iron Man',
      bio: 'El hombre de acero',
      img: 'http://alguna-imagen-de-iron-man.com',
      aparicion: '01-03-1963',
      casa: 'Marvel'
    },
  ];
  public promesa: Promise<String> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 5000);
  });
  public fecha: Date = new Date();
  public video: String = 'https://www.youtube.com/embed/_Qw5feFQMWo';
  public contrasena: String = '1234567890';
  public mostrarContrasena: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
