import { Pokemon } from '../../domains/Pokemon';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Species } from 'src/app/domains/Species';


@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
  
  constructor(private http: HttpClient) { }

  readonly URL_API = `https://pokeapi.co/api/v2/pokemon/`
  readonly URL_SPECIES = `https://pokeapi.co/api/v2/pokemon-species/`
  find(param: string) {
    //return this.http.get(`${this.URL_API}${param}`) as Pokemon;

    return fetch(`${this.URL_API}${param}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    })
      .then((res) => res.json())
  }

  findPokemon(param: string): Observable<Pokemon>{
    return this.http.get(`${this.URL_API}${param}`) as Observable<Pokemon>;
  }

  getSpecies(param: string): Observable<Species>{
    return this.http.get(`${this.URL_SPECIES}${param}`) as Observable<any>;
  }

}
