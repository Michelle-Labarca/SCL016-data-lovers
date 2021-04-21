import { filtrarPorTipo, filtrarPorDebilidad } from './data.js';
import data from "./data/pokemon/pokemon.js";

//Obtenemos el elemento poke-Container desde html
const pokeContainer = document.getElementById("poke-Container");

//Creamos la funcion que crea las Box
function createPokemonBox(poke) {

    //Dentro de mi pokemonBox crea una section con class="poke"
	const pokemonBox = document.createElement("section");
	pokemonBox.classList.add("poke");

    //Declarando constantes para los datos de mi pokemonBox
    const img = poke.img;
    // Pasamos a mayúscula la primera letra y pegamos el resto del nombre
	const name = poke.name[0].toUpperCase() + poke.name.slice(1);
	const number = poke.num;

    //Creamos una constante y dentro de ella guardamos el codigo html a 
    //insertar en pokemonBox
	const pokeInnerHTML = `
        <section class="img-container">
            <img src="${img}" />        
        </section>
        <section class="info">
            <p class="name">${name}</p>
            <p class="number">#${number}</p>
        </section>
    `;
    //Añadimos en la pokemonBox el codigo html creado anteriormente (pokeInnerHtml)
	pokemonBox.innerHTML = pokeInnerHTML;
    //Añade este pokemonBox como hijo de este pokeContainer
    pokeContainer.appendChild(pokemonBox);
}

// -------------------------------------------------

//Creo la funcion para llenar con los pokemon las pokemonBox
function fillContainer(dataPoke){
    //Por cada pokemon de la data voy a crear su propia box
        dataPoke.forEach(pokeSelect => {
            createPokemonBox(pokeSelect);
        })
    }

//llamo a la funcion de fillContainer y le paso la data de los pokemon
fillContainer(data.pokemon);

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
    pokemones_filtrados.forEach(pokeSelect => {
        createPokemonBox(pokeSelect);
    });
});

const weaknessesSelect = document.getElementById("debility");
weaknessesSelect.addEventListener("change", () => {
    const node = document.getElementById("poke-Container");
    node.innerHTML = "";
    const debilidad = weaknessesSelect.value;
    let pokemones_filtrados = filtrarPorDebilidad(data.pokemon,debilidad);
    pokemones_filtrados.forEach(pokeSelect => {
        createPokemonBox(pokeSelect);
    });
})




/*Funcion tarjeta pokemon

const allPokeCard = document.getElementById("poke-Container").childNodes;
allPokeCard.forEach(function(childCard, i) {
    //console.log(card);
    childCard.onclick = function() {
    // eslint-disable-next-line no-console
    console.log(data.pokemon[i-1]);

}});*/
