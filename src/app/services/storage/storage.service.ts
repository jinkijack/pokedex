import { Pokemon } from './../../domains/Pokemon';

export function savePokemon(pokemon: Pokemon):void {
  let history: Pokemon[] = JSON.parse(localStorage.getItem('history') ?? "");
  history.push(pokemon);
  localStorage.setItem('history', JSON.stringify(history));
}

export function init():void {
  let h = localStorage.getItem('history');
  if (!h) {
    localStorage.setItem('history', JSON.stringify([]));
    localStorage.setItem('favorites', JSON.stringify([]));
  }
}

export function saveFavorites(favorites: Pokemon[]):void {
    localStorage.setItem('favorites', JSON.stringify(favorites))
}

export function getHistory():Pokemon[] {
  return JSON.parse(localStorage.getItem('history') ?? JSON.stringify([]));
}

export function getFavorites():Pokemon[] {
  return JSON.parse(localStorage.getItem('favorites') ?? JSON.stringify([]));
}
export function cleanFavorites():void {
  localStorage.setItem('favorites', JSON.stringify([]));
}
export function cleanStorage():void {
  localStorage.setItem('history', JSON.stringify([]));
}