import { Pokemon } from './../../domains/Pokemon';

export function savePokemon(pokemon: Pokemon) {
  let history: Pokemon[] = JSON.parse(localStorage.getItem('history') ?? "");
  history.push(pokemon);
  localStorage.setItem('history', JSON.stringify(history));
}

export function init() {
  let h = localStorage.getItem('history');
  if (!h) {
    localStorage.setItem('history', JSON.stringify([]));
    localStorage.setItem('favorites', JSON.stringify([]));
  }
}

export function saveFavorites(favorites: Pokemon[]){
    localStorage.setItem('favorites', JSON.stringify(favorites))
}

export function getHistory() {
  return JSON.parse(localStorage.getItem('history') ?? JSON.stringify([]));
}

export function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites') ?? JSON.stringify([]));
}

export function cleanStorage(){
  localStorage.setItem('history', JSON.stringify([]));
}