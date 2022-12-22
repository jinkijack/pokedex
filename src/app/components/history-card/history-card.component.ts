import { Pokemon } from './../../domains/Pokemon';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss']
})
export class HistoryCardComponent implements OnInit {

  @Input() pokemon: Pokemon = new Pokemon;
  
  constructor() { }

  ngOnInit(): void {
  }

  getSprite() {
    if (this.pokemon.sprites?.other?.dream_world?.front_default == undefined) {
      return '';
    } else {
      return this.pokemon.sprites?.other?.dream_world.front_default;
    }
  }

}
