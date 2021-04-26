import { filtrarPorTipo, filtrarPorDebilidad, filtrarPorResistencia, filtrarPorNombre } from './data.js';
import data from "./data/pokemon/pokemon.js";

const pokeContainer = document.getElementById("poke-Container");

const obtenerPokemon = (data) => {
    const pokemon = data.map((result) => ({
        name: result.name[0].toUpperCase() + result.name.slice(1),
        img: result.img,
        num: result.num
    }));
    displayPokemon(pokemon);
};

const displayPokemon = (pokemon) => {
    const pokemonHtmlInnert = pokemon.map(
        (poke) => `
        <section class="poke">
        <section class="img-container">
            <img src="${poke.img}" />        
        </section>
        <section class="info">
            <p class="name">${poke.name}</p>
            <p class="number">#${poke.num}</p>
        </section>
        </section>
    `
    )
    .join("");
    pokeContainer.innerHTML = pokemonHtmlInnert + pokeContainer.innerHTML;
};

obtenerPokemon(data.pokemon);

// --------------------------- TARJETA POKEMON -----------------------------
//Obtenemos todos los hijos del nodo pokeContainer (childCard)
const allPokeCard = document.getElementById("poke-Container").childNodes;
allPokeCard.forEach(function(childCard, i) {
    if (i%2 == 1) {
        //Obtenemos la data del pokemon correspondiente a la respectiva tarjeta
        const infoPokemon = data.pokemon[(i-1)/2];
        childCard.addEventListener("click",() =>{
            showModal(infoPokemon);
            const modal = document.querySelector(".modal");
            const closeBtn = document.querySelector(".closeBtn");
            closeBtn.addEventListener("click", () => {
                modal.parentElement.removeChild(modal);
                obtenerPokemon(data.pokemon);
            });
        })
    }
});

const showModal = (infoPokemon) => {
    const name = infoPokemon.name[0].toUpperCase() + infoPokemon.name.slice(1);
    const num = infoPokemon.num;
    const img = infoPokemon.img;
    const generationName = infoPokemon.generation.name.toUpperCase();
    const generationNum = infoPokemon.generation.num.toUpperCase();
    const height = infoPokemon.size.height;
    const weigth = infoPokemon.size.weight;
    const type = infoPokemon.type;
    const weaknesses = infoPokemon.weaknesses;
    const description = infoPokemon.about;
    const attackPoke = infoPokemon.stats["base-attack"];

    const htmlCard = ` 
        <section class="modal">
            <main class="pokemon-card">
            <section class="close">
                <button class="closeBtn">X</button>
            </section>
            <section class="title-row">
                <p class="generation">${generationName}</p>
                <h1 class="name">${name} n°${num}</h1>
            </section>

            <section class="character-img">
                <img src=${img}>
            </section>

            <section class="character-meta">
                <p>${generationNum} | HEIGHT: ${height} | WEIGHT: ${weigth}</p>
            </section>
            
            <section class="character-info">
                <p><b>Type: </b>${type.join("/")}</p>
                <p><b>Weaknesses: </b>${weaknesses.join("/")}</p>
            </section>

            <section class="character-description">
                <p><i>${description}</i></p>
            </section>

            <section class="character-attack">
                <label for="attack">Attack</label>
                <progress id="attack" value=${attackPoke} max="300"></progress>
                ${attackPoke}
            </section>

            <main>

        </section>
    `;
    pokeContainer.innerHTML = htmlCard;
}

//--------------------------------FILTROS-----------------------------------------

//Creo una constante para guardar el input del nombre
const nameFilter = document.getElementById("nameFilter");
// Añado un evento para cuando se teclee algo
nameFilter.addEventListener("keypress", (e) => {
    // Si la tecla que se presiona es 'enter', realizo la búsqueda por el nombre ingresado
    if (e.key === 'Enter') {
        const node = document.getElementById("poke-Container");
        node.innerHTML = "";
        // Obtengo del input el valor ingresado
        const name = nameFilter.value;
        let pokemones_filtrados = filtrarPorNombre(data.pokemon,name);
        //Por cada pokemon filtrado vamos a crear su respectiva box
        obtenerPokemon(pokemones_filtrados);
        //Obtenemos todos los hijos del nodo pokeContainer (childCard)
        const allPokeCard = document.getElementById("poke-Container").childNodes;
        allPokeCard.forEach(function(childCard, i) {
            if (i%2 == 1) {
                //Obtenemos la data del pokemon correspondiente a la respectiva tarjeta
                const infoPokemon = pokemones_filtrados[(i-1)/2];
                childCard.addEventListener("click",() =>{
                    showModal(infoPokemon);
                    const modal = document.querySelector(".modal");
                    const closeBtn = document.querySelector(".closeBtn");
                    closeBtn.addEventListener("click", () => {
                        modal.parentElement.removeChild(modal);
                        obtenerPokemon(data.pokemon);
                    });
                })
            }
        });
      }
});


//Creo una constante para para guardar el selector de tipos
const typeSelect = document.getElementById("type");
//Creo un evento que se ejecuta cuando el selector cambie
typeSelect.addEventListener("change", () => {
    //Vacio el elemento poke-container(padre)
    const node = document.getElementById("poke-Container");
    node.innerHTML = "";
    //Obtengo el valor del selector
    const tipo = typeSelect.value;
    //Obtenemos la lista de pokemones filtrados de acuerdo al valor seleccionado
    let pokemones_filtrados = filtrarPorTipo(data.pokemon,tipo);
    //Por cada pokemon filtrado vamos a crear su respectiva box
    obtenerPokemon(pokemones_filtrados);
    //Obtenemos todos los hijos del nodo pokeContainer (childCard)
    const allPokeCard = document.getElementById("poke-Container").childNodes;
    allPokeCard.forEach(function(childCard, i) {
        if (i%2 == 1) {
            //Obtenemos la data del pokemon correspondiente a la respectiva tarjeta
            const infoPokemon = pokemones_filtrados[(i-1)/2];
            childCard.addEventListener("click",() =>{
                showModal(infoPokemon);
                const modal = document.querySelector(".modal");
                const closeBtn = document.querySelector(".closeBtn");
                closeBtn.addEventListener("click", () => {
                    modal.parentElement.removeChild(modal);
                    obtenerPokemon(data.pokemon);
                });
            })
        }
    });
});

const weaknessesSelect = document.getElementById("debility");
weaknessesSelect.addEventListener("change", () => {
    const node = document.getElementById("poke-Container");
    node.innerHTML = "";
    const debilidad = weaknessesSelect.value;
    let pokemones_filtrados = filtrarPorDebilidad(data.pokemon,debilidad);
    obtenerPokemon(pokemones_filtrados);
    //Obtenemos todos los hijos del nodo pokeContainer (childCard)
    const allPokeCard = document.getElementById("poke-Container").childNodes;
    allPokeCard.forEach(function(childCard, i) {
        if (i%2 == 1) {
            //Obtenemos la data del pokemon correspondiente a la respectiva tarjeta
            const infoPokemon = pokemones_filtrados[(i-1)/2];
            childCard.addEventListener("click",() =>{
                showModal(infoPokemon);
                const modal = document.querySelector(".modal");
                const closeBtn = document.querySelector(".closeBtn");
                closeBtn.addEventListener("click", () => {
                    modal.parentElement.removeChild(modal);
                    obtenerPokemon(data.pokemon);
                });
            })
        }
    });
});

const resistantSelect = document.getElementById("resistant");
resistantSelect.addEventListener("change", () => {
    const node = document.getElementById("poke-Container");
    node.innerHTML = "";
    const resistencia = resistantSelect.value;
    let pokemones_filtrados = filtrarPorResistencia(data.pokemon,resistencia);
    obtenerPokemon(pokemones_filtrados);
    //Obtenemos todos los hijos del nodo pokeContainer (childCard)
    const allPokeCard = document.getElementById("poke-Container").childNodes;
    allPokeCard.forEach(function(childCard, i) {
        if (i%2 == 1) {
            //Obtenemos la data del pokemon correspondiente a la respectiva tarjeta
            const infoPokemon = pokemones_filtrados[(i-1)/2];
            childCard.addEventListener("click",() =>{
                showModal(infoPokemon);
                const modal = document.querySelector(".modal");
                const closeBtn = document.querySelector(".closeBtn");
                closeBtn.addEventListener("click", () => {
                    modal.parentElement.removeChild(modal);
                    obtenerPokemon(data.pokemon);
                });
            })
        }
    });
});