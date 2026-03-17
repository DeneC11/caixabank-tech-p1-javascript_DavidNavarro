import { Pokemon } from "./Pokemon.js";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=50"

async function loadPokemons() {
    const response = await fetch(API_URL);
    const data = await response.json();

    // Convertimos cada resultado en un objeto Pokemon
    return data.results.map(p => new Pokemon(p));
}

// --- Código del navegador ---
if (typeof window !== "undefined") {

    function renderIndex(pokemons) {
        const container = document.getElementById("pokemon-list");

        pokemons.forEach(pokemon => {
            const item = document.createElement("div");
            item.innerHTML = `
                <h2><a href="pokemons/${pokemon.id}.html">${pokemon.name}</a></h2>
                <img src="${pokemon.image}" alt="${pokemon.name}">
            `;
            container.appendChild(item);
        });
    }

    console.log("Pokédex iniciada");
    loadPokemons().then(renderIndex);
}

// --- Generación de páginas individuales (solo Node) ---
if (typeof window === "undefined") {
    const fs = await import("fs");
    const path = await import("path");

    function generatePokemonPage(pokemon) {
        const html = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>${pokemon.name}</title>
            <link rel="stylesheet" href="../style.css">
        </head>
        <body>
        <body class="pokemon-page">
            <h1>${pokemon.name}</h1>
            <img src="${pokemon.image}" alt="${pokemon.name}">
            <p>ID: ${pokemon.id}</p>
        
            <a href="../index.html">Volver a la Pokédex</a>
        </body>
        </body>
        </html>
        `;

        const filePath = path.join("pokemons", `${pokemon.id}.html`);
        fs.writeFileSync(filePath, html);
    }

    loadPokemons().then(pokemons => {
        pokemons.forEach(p => generatePokemonPage(p));
        console.log("Páginas generadas");
    });
}