import { Pokemon } from '../../domains/Pokemon';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http: HttpClient) { }

  readonly URL_API = `https://pokeapi.co/api/v2/pokemon/`

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
  findPokemon(param: string) {
    return this.http.get(`${this.URL_API}${param}`) as Observable<Pokemon>;
  }
}
