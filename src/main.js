import { Pokemon } from "./Pokemon.js";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=50"

async function loadPokemons() {
    const response = await fetch(API_URL);
    const data = await response.json();

    console.log(data);
}

console.log("Pokédex iniciada");
loadPokemons();