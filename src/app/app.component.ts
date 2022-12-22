import { Component } from '@angular/core';
import { Pokemon } from './domains/Pokemon';
import { ConsumerService } from './services/consumer/consumer.service';
import { cleanStorage, getHistory, init, savePokemon } from './services/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokedex';

  pokemonName: string = "";
  history: Pokemon[] = [];

  public pokemon: Pokemon = new Pokemon;

  constructor(private service: ConsumerService) {
    init();
    this.history = getHistory();
    this.service = service;
    this.service.find("1").then((result: Pokemon) => {
      console.log(result)
      this.pokemon = result;
    }
    )
      .catch((err) => console.log(err));
  }

  findPokemon() {

    this.service.find(this.pokemonName.toLowerCase().trim()).then((result: Pokemon) => {
      console.log(result)
      this.pokemon = result;
      savePokemon(this.pokemon)
      this.history = getHistory();
    }
    )
      .catch((err) => console.log(err));
    console.log("Ok:" + this.pokemonName)
  }

  cleanHistory(){
    if( confirm("Tem certeza que deseja apagar o histórico?") ){
      cleanStorage();
      this.history = getHistory();
    }
  }
}
