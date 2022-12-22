import { Pokemon } from "src/app/domains/Pokemon";

export function savePokemon(pokemon: Pokemon) {
  let favorite: Pokemon[] = JSON.parse(localStorage.getItem('favorite') ?? "");
  favorite.push(pokemon);
  localStorage.setItem('favorite', JSON.stringify(favorite));
}
export function init() {
  let f = localStorage.getItem('favorite');
  if (!f) {
    localStorage.setItem('favorite', JSON.stringify([]));
  }
}

export function getFav() {
  return JSON.parse(localStorage.getItem('favorite') ?? "");
}

export function removeFavorite(pokemon: Pokemon){
  let favorite: Pokemon[] = JSON.parse(localStorage.getItem('favorite') ?? "");
  favorite.pop();
  favorite.pop();
  localStorage.setItem('favorite', JSON.stringify(favorite));
}
export function remove(){
  localStorage.removeItem('favorite');

}


export function cleanFavorite(){
  localStorage.removeItem('favorite');
}