import { Component } from '@angular/core';
import { Pokemon } from './domains/Pokemon';
import { ConsumerService } from './services/consumer/consumer.service';
import { cleanStorage, getFavorites, getHistory, init, saveFavorites, savePokemon } from './services/storage/storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokedex';

  pokemonName: string = "";
  history: Pokemon[] = [];
  fav: Pokemon[] = [];

  public pokemon: Pokemon = new Pokemon;

  constructor(private service: ConsumerService) {
    init();
    this.history = getHistory();
    this.fav = getFavorites();
    this.service = service;
    this.service.find("1").then((result: Pokemon) => {
      console.log(result)
      this.pokemon = result;
    }
    )
      .catch((err) => console.log(err));
  }
  find(){
  this.service.findPokemon(this.pokemonName.toLowerCase().trim().replace("#","")).subscribe({
    next: (result:Pokemon) => {
      this.pokemon = result;
      this.addToHistory(this.pokemon)
      this.history = getHistory();
      console.table(result as Pokemon)
    }, error: (error) => {
      console.log(error)
    }
  })
}
addToHistory(poke: Pokemon) {
  for (let p of this.history) {
    if (p.id == poke.id) {
      return;
    }
  }
  this.history.push(poke);
  savePokemon(poke);
}
addToFavorites(poke: Pokemon) {
  console.log("Adicionado aos favoritos: " + poke.name)
  for (let p of this.fav) {
    if (p.id == poke.id) {
      return;
    }
  }
  if (this.fav.length < 10) {
    this.fav.push(poke);
    saveFavorites(this.fav);
  }else{
    alert("Você já atingiu o limite de favoritos!")
  }
}

removeFromFavorites(poke: Pokemon) {
  console.log("removido dos favoritos: " + poke.name)
  this.fav = this.fav.filter((p) => p.id != poke.id)
  saveFavorites(this.fav);

}

viewPokemon(poke: Pokemon){
  this.pokemon = poke;
}

cleanHistory() {
  if(this.history.length > 0){

  if (confirm("Tem certeza que deseja apagar o histórico?")) {
    cleanStorage();
    this.history = getHistory();
  }
}else{
  alert("O histórico está vazio!")
}
}


}
