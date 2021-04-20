//import { getPokemonByFilter } from './data.js';
import data from "./data/pokemon/pokemon.js";

//Obtenemos el elemento poke-Container desde html
const pokeContainer = document.getElementById("poke-Container");

//Creamos la funcion que crea las pokemonCard
function createPokemonCard(poke) {

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
/*Por cada pokemon de la data, voy a llamar a la funcion 
creada anteriormente(createPokemonCard)*/
    dataPoke.forEach(pokeSelect => {
        createPokemonCard(pokeSelect);
    })

}
//llamo a la funcion de fillContainer y le paso la data de los pokemon
fillContainer(data.pokemon);

//Funcion tarjeta pokemon//

const allPokeCard = document.getElementById("poke-Container").childNodes;
allPokeCard.forEach(function(childCard, i) {
    //console.log(card);
    childCard.onclick = function() {
    console.log(data.pokemon[i-1]);

}});