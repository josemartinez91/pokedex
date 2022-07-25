import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import pokemonImage from './img/pokemon.jpg'


const PokemonDetail = () => {

    const { id } = useParams()
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
            .catch(error => console.log(error.response))
    }, [])

    console.log(pokemon)
    const type = pokemon?.types?.[0].type.name;
    return (
        <div className={`${
            type == "bug"
              ? "bug"
              : type == "dark"
              ? "dark"
              : type == "dragon"
              ? "dragon"
              : type == "electric"
              ? "electric"
              : type == "fairy"
              ? "fairy"
              : type == "fighting"
              ? "fighting"
              : type == "fire"
              ? "fire"
              : type == "flying"
              ? "flying"
              : type == "ghost"
              ? "ghost"
              : type == "grass"
              ? "grass"
              : type == "ground"
              ? "ground"
              : type == "ice"
              ? "ice"
              : type == "normal"
              ? "normal"
              : type == "poison"
              ? "poison"
              : type == "psychic"
              ? "psychic"
              : type == "rock"
              ? "rock"
              : type == "steel"
              ? "steel"
              : "water"
          }`}>

            <div className='image-container-detail'>
                <img src={pokemonImage} alt="" />
            </div>
            <div className='image-container-detail'>
                <img src={pokemon.sprites?.other.home.front_default} alt="" />
            </div>

            <div className='info-detail-container'>
                <div className='info-detail-item'>
                    <span ><b>{pokemon.weight}</b></span>
                    <span>Weight</span>
                </div>
                <div className='info-detail-item'>
                    <span><b>{pokemon.height}</b></span>
                    <span>Height</span>
                </div>
            </div>
            <div className='name-container'>
                <p>
                    {pokemon.name}
                </p>
                <span># {pokemon.id}</span>
            </div>

            <div className='type-container info-detail-container'>
                <div className='info-detail-item type-item'>
                    <h2>Type</h2>
                    <div>
                        <p>{pokemon.types?.[0]?.type.name}</p>
                        <p>{pokemon.types?.[1]?.type.name}</p>
                    </div>
                </div>
                <div className='info-detail-item type-item'>
                    <h2>Abilities</h2>
                    <div>
                        <p>{pokemon.abilities?.[0].ability.name}</p>
                        <p>{pokemon.abilities?.[1].ability.name}</p>
                    </div>
                </div>

            </div>
            <div className='movements-container container-header'>
                <h2>Movements</h2>
                {pokemon?.moves?.map(move => (
                    <p>{move.move.name}</p>
                ))}
            </div>
        </div>
    );
};

export default PokemonDetail;