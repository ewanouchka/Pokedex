/* 
  You may use any method of set/update your application
  below is just an example
*/

let pokemons = [];

let { id, name, type, img } = {
  id: 1,
  name: "bulbizarre",
  type: "plant",
  img:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
};

const loadPokemon = () => {
  pokemons.push(id);
  pokemons.push(name);
  pokemons.push(type);
  pokemons.push(img);

  return pokemons;
};

pokemons = loadPokemon();

const app = document.querySelector("#app");

app.addEventListener("click", () => {
  let listOfPokemons = document.createElement("div");
  listOfPokemons.id = "pokemonItem";
  let listOfPokemons_content = document.createTextNode(pokemons);
  listOfPokemons.appendChild(listOfPokemons_content);

  let emptyList = document.getElementById("pokeList");
  let parentDiv = emptyList.parentNode;

  parentDiv.replaceChild(listOfPokemons, emptyList);

  let pokeId = document.createElement("div");
  pokeId.id = "pokemonId";
  let pokeId_content = document.createTextNode(pokemons[0]);
  pokeId.appendChild(pokeId_content);
  let pokeName = document.createElement("div");
  pokeName.id = "pokemonName";
  let pokeName_content = document.createTextNode(pokemons[1]);
  pokeName.appendChild(pokeName_content);
  let pokeType = document.createElement("div");
  pokeType.id = "pokemonType";
  let pokeType_content = document.createTextNode(pokemons[2]);
  pokeType.appendChild(pokeType_content);
  let pokeImg = document.createElement("div");
  pokeImg.id = "pokemonImg";
  let pokeImg_content = new Image(100, 100);
  pokeImg_content.src = pokemons[3];

  pokeImg.appendChild(pokeImg_content);

  let oldList = document.getElementById("pokemonItem");
  let newPokemonItem = oldList.parentNode;
  newPokemonItem.replaceChild(pokeId, oldList);
  newPokemonItem.append(pokeName);
  newPokemonItem.append(pokeType);
  newPokemonItem.append(pokeImg);
});

/*
const handleLoadPokemons = (listOfPokemon) => {
  pokemons = listOfPokemon;
};*/

// function to call on click when <button>Load Pokémons</button> is press

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

/*
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
