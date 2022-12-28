import { Component } from '@angular/core';
import { Pokemon } from './domains/Pokemon';
import { ConsumerService } from './services/consumer/consumer.service';
import { cleanFavorites, cleanStorage, getFavorites, getHistory, init, saveFavorites, savePokemon } from './services/storage/storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
  encode = new RegExp("^[a-zA-Z0-9]*\\.?[a-zA-Z0-9]*$", "g")
  teste = "pikachu";
  test2 = "%" + this.teste;
  public pokemon: Pokemon = new Pokemon;

  public checkoutForm:FormGroup<any> = this.formBuilder.group({
    name: [
      '',[
        Validators.required,
        Validators.maxLength(10),
      ]
    ],
  });

  constructor(private service: ConsumerService, private formBuilder: FormBuilder,) {
    console.log(this.encode.test(this.test2));
    console.log(this.encode.test(this.teste));

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

  onSubmit():void {
    this.pokemonName = this.checkoutForm.value.name;
    this.find();
  }
  find():void {
    this.pokemonName = this.pokemonName.toLowerCase().trim().replace("#","");
    if(this.encode.test(this.pokemonName)) {
      this.service.findPokemon(this.pokemonName).subscribe({
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
    }else{
      alert("O nome do pokemon deve conter apenas letras e números!")
    }
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

handleSubmit(e:any){
  e.preventDefault();
  this.find();
}

handleKeyUp(e:any){
   if(e.keyCode === 13){
      this.handleSubmit(e);
   }
}


}
