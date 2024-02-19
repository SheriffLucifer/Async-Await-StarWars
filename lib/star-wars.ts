// Модуль для работы с API Star Wars.
// Все методы обращаются к стороннему сервису, запрашивают данные у него.
// Методы асинхронны, они возвращают Promise.

// Есть следующие методы:
// starWars.searchCharacters(query),
// starWars.searchPlanets(query),
// starWars.searchSpecies(query).
// starWars.getCharactersById(id),
// starWars.getPlanetsById(id),
// starWars.getSpeciesById(id)

// Код ниже разбирать не нужно.
// Всё, что вам необходимо знать: эти методы умеют получать данные и возвращают промисы.
// Попробуйте запустить их в своем скрипте search.js.

interface People {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
}

interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
}

interface Specie {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
}

interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
}

type result = People[] | Planet[] | Specie[];
type data = People | Planet | Specie;

interface IData {
  results: result;
}

const starWars = {
  // --- Search Methods ---

  searchCharacters: (query: string): Promise<IData> => {
    return new Promise((resolve) => {
      fetch(`https://swapi.dev/api/people/?search=${query}`)
        .then((response) => response.json())
        .then((characters) => resolve(characters))
        .catch((err) => console.log("searchCharacters error: ", err));
    });
  },

  searchPlanets: (query: string): Promise<IData> => {
    return new Promise((resolve) => {
      fetch(`https://swapi.dev/api/planets/?search=${query}`)
        .then((response) => response.json())
        .then((planets) => resolve(planets))
        .catch((err) => console.log("searchPlanets error: ", err));
    });
  },

  searchSpecies: (query: string): Promise<IData> => {
    return new Promise((resolve) => {
      fetch(`https://swapi.dev/api/species/?search=${query}`)
        .then((response) => response.json())
        .then((species) => resolve(species))
        .catch((err) => console.log("searchSpecies error: ", err));
    });
  },

  // --- Get By Id Methods ---

  getCharactersById: async (id: number | string): Promise<People> =>
    await (await fetch(`https://swapi.dev/api/people/${id}`)).json(),

  getPlanetsById: async (id: number | string): Promise<Planet> =>
    await (await fetch(`https://swapi.dev/api/planets/${id}`)).json(),

  getSpeciesById: async (id: number | string): Promise<Specie> =>
    await (await fetch(`https://swapi.dev/api/species/${id}`)).json(),

  getFilmsById: async (id: number | string): Promise<Film> =>
    await (await fetch(`https://swapi.dev/api/films/${id}`)).json(),
};
