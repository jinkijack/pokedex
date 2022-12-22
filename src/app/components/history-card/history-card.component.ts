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

  getArt(){
    if(this.pokemon.sprites?.other?.official_artwork?.front_default == undefined){
      if (this.pokemon.sprites?.other?.dream_world?.front_default == undefined) {
        return this.getSprite();
      }
        else{
          return this.pokemon.sprites?.other?.dream_world?.front_default;
        }
    } else {
      return this.pokemon.sprites?.other?.official_artwork?.front_default;
    }
  }
  getSprite() {
    if (this.pokemon.sprites?.front_default == undefined) {
      return '';
    } else {
      return this.pokemon.sprites?.front_default;
    }
  }

}
