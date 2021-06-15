let pokemons = [];

// un pokemon implémenté pour la base (à revoir pour boucler à travers la liste de pokémons par la suite)

let aPokemon = {
  id: 1,
  name: "bulbizarre",
  type: "plante",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
};

// transformer la liste en array

const loadPokemon = () => {
  pokemons.push(aPokemon.id);
  pokemons.push(aPokemon.name);
  pokemons.push(aPokemon.type);
  pokemons.push(aPokemon.img);

  return pokemons;
};

pokemons = loadPokemon();

// bouton clic

const app = document.querySelector("#app");

app.addEventListener("click", () => {
  let noMatch = document.getElementById("pokeList");
  noMatch.remove();

  let listOfPokemons = document.createElement("div");
  listOfPokemons.id = "pokemonItem";
  listOfPokemons.className = "pokemonItem"; // on crée une div à l'intérieur de laquelle mettre les infos du pokemon

  let pokeId = document.createElement("div");
  pokeId.className = "pokemonId";
  let pokeId_content = document.createTextNode("#" + pokemons[0]); // on crée une div pour l'ID du pokemon, qui reprend la première valeur de l'array
  pokeId.appendChild(pokeId_content);

  let pokeName = document.createElement("div");
  pokeName.className = "pokemonName";
  let pokeName_content = document.createTextNode(pokemons[1]); // on crée une div pour le nom du pokemon, qui reprend la deuxième valeur de l'array
  pokeName.appendChild(pokeName_content);

  let pokeType = document.createElement("div");
  pokeType.className = "pokemonType";
  let pokeType_content = document.createTextNode(pokemons[2]); // on crée une div pour le type du pokemon, qui reprend la troisième valeur de l'array
  pokeType.appendChild(pokeType_content);

  let pokeImg = document.createElement("div");
  pokeImg.className = "pokemonImg"; // on crée une div pour l'image du pokemon
  let pokeImg_content = new Image(100, 100); // on crée un contenu image
  pokeImg_content.src = pokemons[3]; // on récupère la quatrième valeur de l'array pour le lien URL de l'image
  pokeImg.appendChild(pokeImg_content);

  let emptyList = document.getElementById("app"); // on appelle la div qui contient "no pokemon found"
  let parentDiv = emptyList.parentNode;

  parentDiv.replaceChild(listOfPokemons, emptyList); // on la remplace par le bloc extérieur

  let oldList = document.getElementById("pokemonItem"); // on insère les infos à l'intérieur du bloc
  let newPokemonItem = oldList;
  newPokemonItem.append(pokeId, pokeName, pokeType, pokeImg);
});

// import "./styles.css";

/* 
  You may use any method of set/update your application
  below is just an example

let pokémons = [];
*/

// function to call on click when <button>Load Pokémons</button> is press

/* const handleLoadPokémons = (listOfPokémon) => {
  pokémons = listOfPokémon;
};
*/

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
