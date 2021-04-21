
//Filtra a todos los pokemones por su tipo
export const filtrarPorTipo = (allPokemon,type) => {
  let pokemonFiltrados = allPokemon;
  if (type != "all") {
    pokemonFiltrados = allPokemon.filter(
    pokemon => pokemon.type.indexOf(type) > -1, //Documentacion indica que con -1 retorna todo lo filtrado
    );
  }
  return pokemonFiltrados;
};

export const filtrarPorDebilidad = (allPokemon,debilidad) => {
  let pokemonFiltrados = allPokemon;
  if (debilidad != "all") {
    pokemonFiltrados = allPokemon.filter(
      pokemon => pokemon.weaknesses.indexOf(debilidad) > -1,
    );
  }
  return pokemonFiltrados;
}
