import { Pokemon } from "./Pokemon.js";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=50"

async function loadPokemons() {
    const response = await fetch(API_URL);
    const data = await response.json();

    // Convertimos cada resultado en un objeto Pokemon
    return data.results.map(p => new Pokemon(p));
}

function renderIndex(pokemons) {
    const container = document.getElementById("pokemon-list");

    pokemons.forEach(pokemon => {
        const item = document.createElement("div");
        item.innerHTML = `
            <h2>${pokemon.id} ${pokemon.name}</h2>
            <img src="${pokemon.image}" alt="${pokemon.name}">
        `;
        container.appendChild(item);
    });
}

console.log("Pokédex iniciada");
loadPokemons().then(renderIndex);