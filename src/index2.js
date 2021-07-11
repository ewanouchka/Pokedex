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
    pokemons,
    next,
    previous,
    ...rest,
  };
};

const loadScript = async (baseUrl) => {
  const currentUrl = baseUrl;

  const { pokemons, next, previous } = await formatData(await getPokemons(currentUrl));

  displayPokemons(pokemons);

  buttonElement.addEventListener("click", async () => {
    await loadScript(currentUrl);
    buttonElement.className = "hidden-button";
    if (next) {
      nextElement.className = "show-button";
    } else {
      nextElement.className = "hidden-button";
    }
    if (previous) {
      previousElement.className = "show-button";
    } else {
      previousElement.className = "hidden-button";
    }
  });
  nextElement.addEventListener("click", async () => {
    await loadScript(next);
    if (next) {
      nextElement.className = "show-button";
    } else {
      nextElement.className = "hidden-button";
    }
    if (previous) {
      previousElement.className = "show-button";
    } else {
      previousElement.className = "hidden-button";
    }
  });
  previousElement.addEventListener("click", async () => {
    await loadScript(previous);
    if (next) {
      nextElement.className = "show-button";
    } else {
      nextElement.className = "hidden-button";
    }
    if (previous) {
      previousElement.className = "show-button";
    } else {
      previousElement.className = "hidden-button";
    }
  });
};

loadScript();
