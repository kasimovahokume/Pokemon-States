export const getPokemonImageUrl = (id) => {
  const idThreeDigits = id.toString().padStart(3, "0");
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idThreeDigits}.png`;
};