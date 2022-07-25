import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PokemonItem = ({ pokemonUrl }) => {

    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${pokemonUrl}`)
            .then(res => setPokemon(res.data))
    }, [])
    console.log(pokemon)
    const cardColor = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }
    const type = pokemon?.types?.[0].type.name;
    return (
        <div
            onClick={() => cardColor()}
            className={`item-container ${type == "bug"
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
                                                                            : "water"}` }
            >

            <div className='detail-item'>
                <h3>{pokemon.name}</h3>
                <p><b>Types:</b>  {pokemon?.types?.[0].type.name}</p>
                <p><b>Hp: </b>{pokemon.stats?.[0].base_stat}</p>
                <p><b>Attack: </b>{pokemon.stats?.[1].base_stat}</p>
                <p><b>Defense: </b>{pokemon.stats?.[2].base_stat}</p>
                <p><b>Speed: </b>{pokemon.stats?.[5].base_stat}</p>
            </div>
            <div className='image-item'>
                <img src={pokemon.sprites?.other.home.front_default} alt="" />
            </div>



        </div>
    );
};

export default PokemonItem;