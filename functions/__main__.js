const POKEMON = require('../reference/pokemon.json');

/**
* Fuse any two Pokemon of the original (some may say only) 151.
* @param {string} headPokemon The name of the first Pokemon to fuse as a head. Will randomize if not provided.
* @param {string} bodyPokemon The name of the second Pokemon to fuse as a body. Will randomize if not provided.
* @returns {object} pokefusion The fused Pokemon
* @ {string} name The name of the fused Pokemon
* @ {string} image_url The URL to an image of the fused Pokemon
* @ {object} fused The Pokemon fusion
* @   {string} head The Pokemon used in the head of the fusion
* @   {string} body The Pokemon used in the body of the fusion
*/
module.exports = async (headPokemon = null, bodyPokemon = null) => {

  let pokemon = [headPokemon, bodyPokemon]
    .map(name => {
      name = (name || '')
        .toLowerCase()
        .replace(/\s*/gi, '')
        .replace(/\(m\)/gi, '♂')
        .replace(/\(f\)/gi, '♀')
      return POKEMON.names.findIndex(n => n.toLowerCase().replace(/\s*/gi, '') === name);
    });

  if (!!headPokemon && pokemon[0] === -1) {
    throw new Error(`Invalid headPokemon: "${headPokemon}" not found.`);
  } else if (!!bodyPokemon && pokemon[1] === -1) {
    throw new Error(`Invalid bodyPokemon: "${bodyPokemon}" not found.`);
  }

  pokemon = pokemon.map(n => n > -1 ? n : Math.floor(Math.random() * 151));
  let prefix = POKEMON.prefixes[pokemon[0]];
  let suffix = POKEMON.suffixes[pokemon[1]];
  if (prefix.endsWith(' ')) {
    suffix = suffix[0].toUpperCase() + suffix.substr(1);
  }

  return {
    name: `${prefix}${suffix}`,
    image_url: `https://images.alexonsager.net/pokemon/fused/${pokemon[1] + 1}/${pokemon[1] + 1}.${pokemon[0] + 1}.png`,
    fused: {
      head: POKEMON.names[pokemon[0]],
      body: POKEMON.names[pokemon[1]]
    }
  }
};
