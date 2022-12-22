export class Pokemon {
  public abilities?: Ability[];
  public base_experience?: number;
  public forms?: Species[];
  public game_indices?: GameIndex[];
  public height?: number;
  public id?: number;
  public is_default?: boolean;
  public moves?: Move[];
  public name?: string;
  public species?: Species;
  public sprites?: Sprites;
  public stats?: Stat[];
  public types: Type[] = [];
  public weight?: number;

}

export interface Ability {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}

export interface Species {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  version: Species;
}

export interface Move {
  move: Species;
}


export interface Sprites {
  front_default: string;
  other?: Other;
}

export interface Other{
  dream_world?: DreamWorld;
  official_artwork?: OfficialArtwork;
}
export interface DreamWorld {
  front_default: string;
  front_female: null;
}
export interface OfficialArtwork {
  front_default: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}

export interface Type {
  slot: number;
  type: Species;
}



