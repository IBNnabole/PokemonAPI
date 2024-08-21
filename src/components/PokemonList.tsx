import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getPokemons } from '../api/pokemons.api';
import Pagination from './Pagination';

interface Pokemon {
    name: string;
    url: string;
    spriteUrl: string;
}

const PokemonList: React.FC = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchParams] = useSearchParams();
    const page = parseInt(searchParams.get('page') || '1');

    useEffect(() => {
        const fetchPokemons = async () => {
            setLoading(true);
            const data = await getPokemons(page);
            setPokemons(data.results);
            setLoading(false);
        };

        fetchPokemons();
    }, [page]);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Pokemon List</h1>
            <ul>
                {pokemons.map((pokemon, index) => (
                    <li key={index}>
                        <Link to={`/${pokemon.name}`}>{pokemon.name}</Link>
                    </li>
                ))}
            </ul>
            <Pagination currentPage={page} />
        </div>
    );
};

export default PokemonList;
