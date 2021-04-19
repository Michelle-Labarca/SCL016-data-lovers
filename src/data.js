
// Obtener todos los pokemon
export const getPokemonByFilter = (data,filter) => {

  let infoAllPokemon = Object.values(data);

  let listFilterPokemon = infoAllPokemon.filter(element => {
    return element.tags.includes(filter);
  })

  return listFilterPokemon;
};

export const anotherExample = () => {
  return 'OMG';
};
