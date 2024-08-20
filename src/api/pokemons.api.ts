import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemons = async (page: number) => {
  const response = await axios.get(`${BASE_URL}/pokemon?limit=20&offset=20`);
  return response.data;
};

export const getPokemonById = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/pokemon/${id}`);
  return response.data;
};
