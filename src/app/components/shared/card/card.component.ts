import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() heroe: Heroe;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  moveTo(id: string) {
    this.router.navigate(['/heroes', id]);
  }
}
