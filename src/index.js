const buttonElement = document.querySelector("#button");
const previousElement = document.querySelector("#previous");
const nextElement = document.querySelector("#next");

const displayPokemons = (pokemons) => {
  const pokemonsElement = document.querySelector("#pokemons");

  pokemonsElement.innerHTML = pokemons
    .map(
      (pokemon) =>
        `<div class="pokemonItem"><div class="pokemonId">#${pokemon.id}</div><h1 class="pokemonName">${pokemon.name}</h1><h2 class="pokemonType">${pokemon.type}</h2><img src="${pokemon.img}"/></div>`
    )
    .join("");
};

const getPokemons = async (url = "https://pokeapi.co/api/v2/pokemon") => {
  const pokemons = await fetch(url);

  return pokemons.json();
};

const getPokemon = async (url) => {
  const pokemon = await fetch(url);

  return pokemon.json();
};

const formatData = async (pokemonApiJSON) => {
  const { next, previous, results, ...rest } = pokemonApiJSON;

  const pokemons = await Promise.all(
    results.map(async ({ name, url }) => {
      const { sprites, types, id } = await getPokemon(url);

      return {
        name,
        img: sprites.front_default,
        type: types.map(({ type }) => type.name).join(" - "),
        id,
      };
    })
  );

  return {
    next,
    previous,
    pokemons,
    ...rest,
  };
};

buttonElement.addEventListener("click", async () => {
  const { pokemons, next, previous } = await formatData(await getPokemons());

  displayPokemons(pokemons);

  const changeButtons = () => {
    buttonElement.className = "hidden-button";
    if (next != null) {
      nextElement.className = "show-button";
    }
    if (previous != null) {
      previousElement.className = "show-button";
    }
  };
  changeButtons();

  nextElement.addEventListener("click", async () => {
    const { pokemons, nextN = next, previousN = previous } = await formatData(await getPokemons(next));
    displayPokemons(pokemons);

    const changeButtons = () => {
      buttonElement.className = "hidden-button";
      if (nextN != null) {
        nextElement.className = "show-button";
      }
      if (previousN != null) {
        previousElement.className = "show-button";
      }
    };
    changeButtons();
  });

  previousElement.addEventListener("click", async () => {
    const { pokemons, nextN, previousN } = await formatData(await getPokemons(previous));
    displayPokemons(pokemons);

    const changeButtons = () => {
      buttonElement.className = "hidden-button";
      if (nextN != null) {
        nextElement.className = "show-button";
      }
      if (previousN != null) {
        previousElement.className = "show-button";
      }
    };
    changeButtons();
  });
});

// affichier les pokémons et / ou les précédants

//1 ajouter 2 button dans l'html
//2 récupérer les buttons précédemment crée en javascript
//3 Leurs ajouter un eventListenr "click"
//4 réafficher la nouvelle liste de pokémon en fonction de cette nouvelle url

// BONUS: Si il n'ya pas d'url previous ou next ne pas afficher les buttons ou les disabled
// BONUS: Affichier le nombre de pokémon

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
