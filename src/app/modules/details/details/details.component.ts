import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon, Type } from './../../../domains/Pokemon';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ConsumerService } from 'src/app/services/consumer/consumer.service';
import { Species } from '../../../domains/Species';



@Component({
  selector: 'details-pokemon',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss',
              '../../../../styles.scss']
})
export class DetailsComponent implements OnInit {

  public pokemon: Pokemon = new Pokemon;
  public specie: Species = new Species;
  public pokemonId: string = '';
  @Output() addToFavorites = new EventEmitter<Pokemon>();
  @Input() type: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ConsumerService
  ) { 

    this.pokemonId = this.route.snapshot.paramMap.get("id") ?? '';

    this.service.findPokemon(this.pokemonId.replace('#','')).subscribe({
      next: (result: Pokemon) => {
        this.pokemon = result;
        console.log(result as Pokemon)
      },
      error: (error) => {
        console.log(error)
      }
    })

    this.service.getSpecies(this.pokemonId.replace('#','')).subscribe({
      next: (result: Species) => {
        this.specie = result;
        console.log(result as Species)
      },
      error: (error) => {
        console.log(error)
      }
    })

  }

  ngOnInit(): void {


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
  get description(){
    if(this.specie.flavor_text_entries){
      return this.specie.flavor_text_entries[0].flavor_text;
    }else{
      return '';
    }

  }

  add(){
    this.addToFavorites.emit(this.pokemon)
  }
}
