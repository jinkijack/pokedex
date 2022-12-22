import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/domains/Pokemon';

@Component({
  selector: 'app-fav-card',
  templateUrl: './fav-card.component.html',
  styleUrls: ['./fav-card.component.scss']
})

export class FavCardComponent implements OnInit {

  @Input() pokemon: Pokemon = new Pokemon;
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

}
