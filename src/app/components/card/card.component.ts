import { Pokemon, Type, Other, OfficialArtwork } from './../../domains/Pokemon';
import { Component, EventEmitter, Input, Output  } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss',
              '../../../styles.scss']
})



export class CardComponent {
//  pokemon:Pokemon = new Pokemon();

  @Input() pokemon: Pokemon = new Pokemon;
  @Input() type: any;
  @Output() addToFavorites = new EventEmitter<Pokemon>();

  constructor() {
  }

  getSprite() {
    if (this.pokemon.sprites?.front_default == undefined) {
      return '';
    } else {
      return this.pokemon.sprites?.front_default;
    }
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

  get height() {
    if (this.pokemon.height) {
      console.log(this.pokemon.sprites?.other?.official_artwork?.front_default)
      return this.pokemon.height / 10;
    } else {
      return '';
    }
  }
  get weight() {
    if (this.pokemon.weight) {
      return this.pokemon.weight / 10;
    } else {
      return '';
    }
  }

  get name(){
    if(this.pokemon.name){
      return this.pokemon.name;
    }else{
      return '';
    }
  }

  add(){
    this.addToFavorites.emit(this.pokemon)
  }

}
