import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from './domains/Pokemon';
import { ConsumerService } from './services/consumer/consumer.service';
import { cleanFavorites, cleanStorage, getFavorites, getHistory, init, saveFavorites, savePokemon } from './services/storage/storage.service';
import { FormBuilder, FormGroup, Validators, FormsModule  } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pokedex';

  // pokemonName: string = "";
  history: Pokemon[] = [];
  fav: Pokemon[] = [];
  encode = new RegExp("^[a-z0-9]*\\.?[a-z0-9]*$", "g")
  regex: RegExp = /^[a-z0-9]*\.?[a-z0-9]*$/g
  cursor: string = "cursor-default";
  teste1 = "."
  teste2 = "#"
  teste3= "";
  public pokemon: Pokemon = new Pokemon;

  public checkoutForm:FormGroup<any> = this.formBuilder.group({
    name: '',
  });

  constructor(private service: ConsumerService, private formBuilder: FormBuilder,) {
    init();
    console.log(this.regex.test(this.teste3))
    this.history = getHistory();
    this.fav = getFavorites();
    this.service = service;
    this.service.find("1").then((result: Pokemon) => {
    console.log(result)
    this.pokemon = result;
    this.cursor = "cursor-default";
  }
    )
      .catch((err) => console.log(err));
    
  }
  ngOnInit():void {
    this.cursor = "cursor-default";
    this.history = getHistory();
    this.fav = getFavorites();
    
  }
  onSubmit():void {
    console.log(this.cursor)
    this.cursor = "cursor-loading";
    console.log(this.cursor)
    var pokemonName = this.checkoutForm.value.name;
    var bol = false;
    this.checkoutForm.reset();

    if(pokemonName == null) {
      alert("O nome do pokemon deve conter apenas letras e números!")
      this.cursor = "cursor-default";
      return;
    }
    if(pokemonName == undefined) {
      alert("O nome do pokemon deve conter apenas letras e números!")
      this.cursor = "cursor-default";
      return;
    }
    pokemonName = pokemonName.toLowerCase().replace(".","").trim();
    console.log("inicio")
    
    
    
    if(pokemonName == "") {
      alert("O nome do pokemon deve conter apenas letras e números!")
      this.cursor = "cursor-default";
      return;
    }
    if(pokemonName == " ") {
      alert("O nome do pokemon deve conter apenas letras e números!")
      this.cursor = "cursor-default";
      return;
    }

    console.log(this.encode.test(pokemonName))
    console.log("Negado " + !this.encode.test(pokemonName))
    console.log(pokemonName)

    if(!pokemonName.match(this.encode)) {
      console.log("entrou encode")
      alert("O nome do pokemon deve conter apenas letras e números!")
      return;
    }

    this.find(pokemonName);
    this.cursor = "cursor-default";
  }

  find(name:string):void {
      this.service.findPokemon(name).subscribe({
        next: (result:Pokemon) => {
          this.pokemon = result;
          this.addToHistory(this.pokemon)
          this.history = getHistory();
          console.table(result as Pokemon)
        }, error: (error) => {
          alert("Pokemon não encontrado!");
          console.log(error)
        }
      })
  }
addToHistory(poke: Pokemon):void {
  for (let p of this.history) {
    if (p.id == poke.id) {
      return;
    }
  }
  this.history.push(poke);
  savePokemon(poke);
}
addToFavorites(poke: Pokemon):void {
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

removeFromFavorites(poke: Pokemon):void {
  console.log("removido dos favoritos: " + poke.name)
  this.fav = this.fav.filter((p) => p.id != poke.id)
  saveFavorites(this.fav);

}

viewPokemon(poke: Pokemon):void {
  this.pokemon = poke;
}

cleanHistory():void {
  if(this.history.length > 0){
    if (confirm("Tem certeza que deseja apagar o histórico?")) {
      cleanStorage();
      this.history = getHistory();
    }
  }else{
    alert("O histórico já está vazio!")
  }
}
cleanFavorites():void {
  if(this.fav.length > 0){
    if (confirm("Tem certeza que deseja apagar os favoritos?")) {
      cleanFavorites();
      this.fav = getFavorites();
    }
  }else{
    alert("Você não tem favoritos!")
  }
}

}
