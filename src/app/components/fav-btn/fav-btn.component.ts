import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/domains/Pokemon';
import { savePokemon as saveFav, init as initFav, getFav, removeFavorite, cleanFavorite } from '../../services/fav/favorito.service';

@Component({
  selector: 'app-fav-btn',
  templateUrl: './fav-btn.component.html',
  styleUrls: ['./fav-btn.component.scss']
})
export class FavBtnComponent implements OnInit {


  @Input() selected: boolean;
  @Input() pokemon: Pokemon = new Pokemon;
  @Output() selectedChange = new EventEmitter<boolean>();
  public fav: Pokemon[] = [];

  constructor() {
    initFav();
    this.fav = getFav();
   }

  ngOnInit() {
  }

  public toggleSelected() {
    saveFav(this.pokemon);
    this.fav = getFav();
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }

  saveFav(pokemon: Pokemon){
    saveFav(pokemon);
    this.fav = getFav();
  }

}
