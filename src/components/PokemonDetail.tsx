import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { getPokemonById } from '../api/pokemons.api';
import '../index.css'

interface PokemonDetail {
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    sprites: {
        front_default: string;
    };
}

const PokemonDetail: React.FC = () => {
    const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPokemon = async () => {
            if(id){
                const data = await getPokemonById(id);
                setPokemon(data);
            }else{
                console.error('Pokemon ID is missing');
            }
        };

        fetchPokemon();
    }, [id]);


    const handleBackClick = () => {
        navigate(-1);
    };

    if (!pokemon) return <div>Loading...</div>;

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Base Experience: {pokemon.base_experience}</p>
            <button type="submit" onClick={handleBackClick}>Home</button>
        </div>
    );
};

export default PokemonDetail;
