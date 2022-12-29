export class Species{
    public id?: number;
    public name?: string
    public evolution_chain?: EvolutionChain;
    public flavor_text_entries?: FlavorTextEntry[];
    public form_descriptions?: FormDescription[];
}
export interface EvolutionChain{
    url: string;
}
export interface FlavorTextEntry{
    flavor_text: string;
}
export interface FormDescription{
    description: string;
}
