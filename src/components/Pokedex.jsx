import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom'
import PokemonItem from './PokemonItem';
import { useNavigate } from 'react-router-dom'

const Pokedex = () => {

    const user = useSelector(state => state.user)
    const [pokemons, setPokemons] = useState([])
    const [pokemonSearch, setPokemonSearch] = useState('')
    const navigate = useNavigate()
    const [types, setTypes] = useState([])

    useEffect(() => {
        axios.get(' https://pokeapi.co/api/v2/pokemon/?offset=0&limit=600')
            .then(res => setPokemons(res.data.results))

        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setTypes(res.data.results))
    }, [])


    const search = e => {
        e.preventDefault()
        alert(pokemonSearch)
        navigate(`/pokedex/${pokemonSearch}`)
    }

    const filterType = (e) => {
        alert('Se selecciono el tipo: ' + e.target.value)
        axios.get(e.target.value)
            .then(res => setPokemons(res.data.pokemon))
            .catch(error => console.log(error.response))
    }

    console.log(pokemons)

    const [page, setPage] = useState(1)
    const lastIndex = page * 20
    const firstIndex = lastIndex - 20
    const pokemonsPagination = pokemons.slice(firstIndex, lastIndex)
    const lastPage = Math.ceil(pokemons.length / 20)
    console.log(lastPage)

    const numbers = [];
    for (let i = 1; i <= lastPage; i++) {
        numbers.push(i)

    }
    // const [numbersPagination, setNumbersPagination] = useState(1)
    // const lastNumber = numbersPagination * 10
    // const firstNumber = lastNumber -10
    // const numberPagination = numbers.slice(firstNumber, lastNumber)

    return (
        <div>
            <div className='container-header'>
                <h1>Pokedex </h1>
                <p>Welcome <b>{user}</b>, here you can find your favorite pokemon  </p>
            </div>

            <form onSubmit={search} className='input-search'>
                <input
                    type="text"
                    value={pokemonSearch}
                    onChange={e => setPokemonSearch(e.target.value)}
                />
                <button>Search</button>
            </form>
            <div className='select-container'>
                <select
                    onChange={filterType}
                    className='select-type'
                >
                    <option value="">Select a pokemon</option>
                    {types.map(type => (
                        <option
                            value={type.url}
                            key={type.url}>
                            {type.name}
                        </option>
                    ))}

                </select>
            </div>

            <ul className='card-container'>
                {pokemonsPagination?.map(pokemon => (
                    <li key={pokemon.url} className='list-item' >
                        <PokemonItem
                            pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url} />

                    </li>
                ))}
            </ul>
            <div className='col-xs xs-button-container'>
                <div className='col-xs-6'>
                    <button
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                        className='header-button button-xs-header'
                    >Prev-Page </button>
                </div>
                <div>
                    {numbers.map(number => (
                        <button
                            className='button-page'
                            key={number}
                            onClick={() => setPage(number)}
                        >
                            {number}
                        </button>
                    ))}
                </div>



                <div className='col-xs-6'>
                    <button
                        onClick={() => setPage(page + 1)}
                        disabled={page === lastPage}
                        className='header-button button-xs-header'
                    >Next Page</button>
                </div>

            </div>

        </div>
    );
};

export default Pokedex;