import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import pokemonImage from './img/pokemon.jpg'
import back from './img/atras.png'


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
    const secondType = pokemon?.types?.[1]?.type.name;
    return (
        <div className={` ${type == "bug"
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

            <div>
                <Link to={'/pokedex'}>
                    <img className='back-image' src={back} alt="" />
                </Link>
            </div>


            <div className='image-container-detail'>
                <img src={pokemonImage} alt="" />
            </div>
            <div className='image-container-detail info-detail-container '>
                <div className='image-item-detail'>
                    <img src={pokemon.sprites?.other.home.front_default} alt="" />
                </div>

            </div>

            <div className='info-detail-container'>
                <div className='container-weight'>
                    <div className='info-detail-item'>
                        <span ><b>{pokemon.weight}</b></span>
                        <span>Weight</span>
                    </div>
                    <div className='info-detail-item'>
                        <span><b>{pokemon.height}</b></span>
                        <span>Height</span>
                    </div>
                </div>

            </div>
            <div className='name-container'>
                <div className='container-weight card-container'>
                    <p>
                        {pokemon.name}
                    </p>
                    <span># {pokemon.id}</span>
                </div>

            </div>

            <div className='type-container info-detail-container'>
                <div className='info-detail-item type-item type-item-type item-detail-md'>
                    <h2>Type</h2>
                    <div>
                        <p className={`type-item-description  ${type == "bug"
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
                            }`}>{pokemon.types?.[0]?.type.name}</p>
                        {pokemon.types?.[1]?.type.name ? <p className={`type-item-description ${secondType == "bug"
                            ? "bug"
                            : secondType == "dark"
                                ? "dark"
                                : secondType == "dragon"
                                    ? "dragon"
                                    : secondType == "electric"
                                        ? "electric"
                                        : secondType == "fairy"
                                            ? "fairy"
                                            : secondType == "fighting"
                                                ? "fighting"
                                                : secondType == "fire"
                                                    ? "fire"
                                                    : secondType == "flying"
                                                        ? "flying"
                                                        : secondType == "ghost"
                                                            ? "ghost"
                                                            : secondType == "grass"
                                                                ? "grass"
                                                                : secondType == "ground"
                                                                    ? "ground"
                                                                    : secondType == "ice"
                                                                        ? "ice"
                                                                        : secondType == "normal"
                                                                            ? "normal"
                                                                            : secondType == "poison"
                                                                                ? "poison"
                                                                                : secondType == "psychic"
                                                                                    ? "psychic"
                                                                                    : secondType == "rock"
                                                                                        ? "rock"
                                                                                        : secondType == "steel"
                                                                                            ? "steel"
                                                                                            : "water"
                            }`}>{pokemon.types?.[1]?.type.name}</p> : ''}

                    </div>
                </div>
                <div className='info-detail-item type-item type-item-type item-detail-md'>
                    <h2>Abilities</h2>
                    <div>
                        <p className='item-ability type-item-description'>{pokemon.abilities?.[0].ability.name}</p>
                        <p className='item-ability type-item-description'>{pokemon.abilities?.[1].ability.name}</p>
                    </div>
                </div>

            </div>
            <div className='container-header '>
                <div className='movements-container '>
                    <h2>Movements</h2>
                    {pokemon?.moves?.map(move => (
                        <p><b>{move.move.name}</b></p>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default PokemonDetail;