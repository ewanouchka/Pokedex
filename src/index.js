

const buttonElement = document.querySelector("#button");

const displayPokemons = (pokemons) => {
  const pokemonsElement = document.querySelector("#pokemons");

  pokemonsElement.innerHTML = pokemons
    .map((pokemon) => `<div><h1>${pokemon.name}</h1><h2>${pokemon.type}</h2><img src="${pokemon.img}"/></div>`)
    .join("");
};

const getPokemons = async () => {
  const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon");

  return pokemons.json();
};

buttonElement.addEventListener("click", async () => {
  const pokemons = await getPokemons();
  displayPokemons(pokemons);
});


// 1 Should set pokémons on click using addEventlister and/or onclick property

/*

a pokémon is of type : {
  id: string | number;
  name: string;
  type: string;
  img: string | undefined
}

*/

// 2 Should replace <p>no pokémon found<p> with a list of pokémon

/*app.innerHTML = `<h1>Liste de Pokémons:</h1>
                <button>Load Pokémons</button>
                <p>no pokémon found</p>`;

// 3 Should looks great !!! use ur own imagination !

/* 4 how about using a real pokémon api ? 
  Try using this : https://pokeapi.co/ see doc
  below is just an example try to get the same information as our pokémon object : 
  {
    id: string | number;
    name: string;
    type: string;
    img: string | undefined
  }

  Warning you will need multiple fetch top get all the informations!!!
*/
/*
const getPokémons = async () => {
  const pokémons = await fetch("https://pokeapi.co/api/v2/pokemon");

  return pokémons.json();
};

/* 

try to look on the console to see what u get from this getPokémons function

getPokémons().then((pokémons) => {
  pokémons.results.map(({ name, url }) => console.log(name, url));
});

*/
