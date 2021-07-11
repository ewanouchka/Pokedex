const pokemonsJSON = [
  {
    id: 1,
    name: {
      english: "Bulbasaur",
      japanese: "\u30d5\u30b7\u30ae\u30c0\u30cd",
      chinese: "\u5999\u86d9\u79cd\u5b50",
      french: "Bulbizarre",
    },
    type: ["Grass", "Poison"],
    base: {
      HP: 45,
      Attack: 49,
      Defense: 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      Speed: 45,
    },
    species: "Seed Pok\u00e9mon",
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun\u2019s rays, the seed grows progressively larger.",
    evolution: {
      next: [["2", "Level 16"]],
    },
    profile: {
      height: "0.7 m",
      weight: "6.9 kg",
      egg: ["Monster", "Grass"],
      ability: [
        ["Overgrow", "false"],
        ["Chlorophyll", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {},
    sprite: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/001.png",
    thumbnail: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/001.png",
    hires: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png",
  },
  {
    id: 2,
    name: {
      english: "Ivysaur",
      japanese: "\u30d5\u30b7\u30ae\u30bd\u30a6",
      chinese: "\u5999\u86d9\u8349",
      french: "Herbizarre",
    },
    type: ["Grass", "Poison"],
    base: {
      HP: 60,
      Attack: 62,
      Defense: 63,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      Speed: 60,
    },
    species: "Seed Pok\u00e9mon",
    description:
      "There is a bud on this Pok\u00e9mon\u2019s back. To support its weight, Ivysaur\u2019s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it\u2019s a sign that the bud will bloom into a large flower soon.",
    evolution: {
      prev: ["1", "Level 16"],
      next: [["3", "Level 32"]],
    },
    profile: {
      height: "1 m",
      weight: "13 kg",
      egg: ["Monster", "Grass"],
      ability: [
        ["Overgrow", "false"],
        ["Chlorophyll", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {},
    sprite: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/002.png",
    thumbnail: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/002.png",
    hires: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/002.png",
  },
];
/* 
const getPokemon = () => {
  for (let n of pokemonsJSON) {
    return n;
  }
  return;
};*/

const pokemons = pokemonsJSON;

const formatData = () => {
  const aPokemon = getPokemon();

  const { id, name, type, sprite, ...rest } = aPokemon;

  const pokemons = { id, name: name.french, type: type.join(" - "), sprite };

  return { pokemons, ...rest };
};

const pokemon = formatData();

const buttonElement = document.querySelector("#button");

const displayPokemons = (pokemons) => {
  const pokemonsElement = document.querySelector("#pokemons");

  pokemonsElement.innerHTML = pokemons
    .map(
      (pokemon) =>
        `<div class="pokemonItem"><div class="pokemonId">#${pokemon.id}</div><h1 class="pokemonName">${pokemon.name}</h1><h2 class="pokemonType">${pokemon.type}</h2><img src="${pokemon.sprite}"/></div>`
    )
    .join("");
};

/*

const getPokemons = async (
  url = "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json"
) => {
  const pokemons = await fetch(url);
const
  pokemons
    .map(
      (pokemon) => 

  console.log(pokemons.join());
  pokemons = await Promise.all(
    pokemons.map(({ id, name, type, sprite, ...rest }) => {
      return {
        id,
        name: name.french,
        type: type.join(" - "),
        sprite,
        ...rest,
      };
    })
  );

  return pokemons.json();
};*/

/*
const getPokemon = async (url) => {
  const pokemon = await fetch(url);

  return pokemon.json();
};
const formatData = async (pokemons) => {
  const { id, name, type, sprite, ...rest } = pokemons;
  console.log(id, name, type, sprite, ...rest);
  /* const pokemons = await Promise.all(
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
    id,
    name: name.french,
    type: type.join(" - "),
    sprite,
    ...rest,
  };
};*/

/*
const previousElement = document.querySelector("#previous");
const nextElement = document.querySelector("#next");*/

const loadScript = async (baseUrl) => {
  const currentUrl = baseUrl;

  const { pokemons } = await formatData(await getPokemon());

  displayPokemons(pokemons);

  console.log(displayPokemons(pokemons));

  buttonElement.addEventListener("click", async () => {
    await loadScript(currentUrl);
    buttonElement.className = "hidden-button";
    nextElement.className = "show-button";
  });
  /*
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
  });*/
};

loadScript();
