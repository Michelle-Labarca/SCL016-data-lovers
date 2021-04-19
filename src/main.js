//import { getPokemonByFilter } from './data.js';
import data from './data/pokemon/pokemon.js';
//console.log(data.pokemon);

const pokeContainer = document.getElementById("pokeContainer");

function createPokemonCard(pokemon) {
	const pokemonBox = document.createElement('div');
	pokemonBox.classList.add('pokemon');

    const img = pokemon.img;
    // Pasamos a mayúscula la primera letra y pegamos el resto del nombre
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const number = pokemon.num;

	const pokeInnerHTML = `
        <div class="img-container">
            <img src="${img}" />
        </div>
        <div class="info">
            <p class="name">${name}</p>
            <p class="number">#${number}</p>
        </div>
    `;

	pokemonBox.innerHTML = pokeInnerHTML;
    pokeContainer.appendChild(pokemonBox);
}

function fillContainer(dataPokemon){

    dataPokemon.forEach(pokemon => {
        createPokemonCard(pokemon);
    })

}

fillContainer(data.pokemon);