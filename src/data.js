
export const filtrarPorNombre = (allPokemon,nombre) => {
  let pokemonFiltrados = allPokemon;
  if (nombre != "") {
    pokemonFiltrados = allPokemon.filter(
      pokemon => pokemon.name.indexOf(nombre) > -1,
    );
  }
  return pokemonFiltrados;
}

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
};

export const filtrarPorResistencia = (allPokemon,resistencia) => {
  let pokemonFiltrados = allPokemon;
  if (resistencia != "all") {
    pokemonFiltrados = allPokemon.filter(
      pokemon => pokemon.resistant.indexOf(resistencia) > -1,
    );
  }
  return pokemonFiltrados;
}

/* Testeo busqueda por nombre
export const test = (allPokemon,name) => {
  let pokemonFiltrados = allPokemon.filter(
    pokemon => pokemon.name.startsWith(name) > -1,
  );
  return pokemonFiltrados;
}*/