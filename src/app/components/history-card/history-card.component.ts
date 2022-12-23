import { Pokemon } from './../../domains/Pokemon';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss']
})
export class HistoryCardComponent implements OnInit {

  @Input() pokemon: Pokemon = new Pokemon;
  @Input() isFavorite = false;
  @Output() removeFromFavorites = new EventEmitter<Pokemon>();
  @Output() viewPokemon = new EventEmitter<Pokemon>();
  
  constructor() { }

  ngOnInit(): void {
  }

  getSprite() {
    if (this.pokemon.sprites?.front_default == undefined) {
      return '';
    } else {
      return this.pokemon.sprites?.front_default;
    }
  }

  remove(){
    this.removeFromFavorites.emit(this.pokemon)
  }

  view(){
    this.viewPokemon.emit(this.pokemon)
  }

}
