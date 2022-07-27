import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom'
import PokemonItem from './PokemonItem';
import { useNavigate } from 'react-router-dom'
import pokedexImg from './img/pokedex.jpg'
import nextImg from './img/next.png'
import previousImg from './img/previous.png'
import logout from './img/logout.png'

const Pokedex = () => {

    const user = useSelector(state => state.user)
    const [pokemons, setPokemons] = useState([])
    const [pokemonSearch, setPokemonSearch] = useState('')
    const navigate = useNavigate()
    const [types, setTypes] = useState([])
    const [searchOption, setSearchOption] = useState(false)

    const [page, setPage] = useState(1)
    const lastIndex = page * 20
    const firstIndex = lastIndex - 20
    const pokemonsPagination = pokemons.slice(firstIndex, lastIndex)
    const lastPage = Math.ceil(pokemons.length / 20)

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
        setPage(1)

    }

    console.log(pokemons)


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
            <div className='col-12'>
                <img className='col-12' src={pokedexImg} alt="" />
            </div>
            <div className='mt-3 logout-container'>
                <Link to='/'><img className='logout-img' src={logout} alt="" /></Link>
            </div>
            <div className='container-header'>
                <h1>Pokedex </h1>
                <p>Welcome <b>{user}</b>, here you can find your favorite pokemon  </p>
            </div>

            <div className="form-check form-switch check-container">
                <span className='span-check'> <b>Type </b> </span>


                <input
                    name='searchOption'
                    className="form-check-input input-check"
                    type="checkbox" role="switch"
                    id="flexSwitchCheckDefault"
                    checked={searchOption}
                    onChange={e => setSearchOption(e.target.checked)}
                >
                </input>


                <span className='span-check'> <b>Pokemon</b></span>
            </div>

            {searchOption ? <form onSubmit={search} className='input-search'>
                <input
                    type="text"
                    value={pokemonSearch}
                    onChange={e => setPokemonSearch(e.target.value)}
                    className='input-search-input input-search-md'
                />
                <button className='btn btn-info'>Search</button>
            </form> : <div className='select-container'>
                <select
                    onChange={filterType}
                    className='select-type form-select'
                >
                    <option value="">All pokemons</option>
                    {types.map(type => (
                        <option
                            value={type.url}
                            key={type.url}>
                            {type.name}
                        </option>
                    ))}

                </select>
            </div>}



            <ul className='card-container card-container-md'>
                {pokemonsPagination?.map(pokemon => (
                    <li
                        key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                        className='list-item list-item-md list-item-xl' >
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
                        className='header-button button-xs-header btn btn-primary'
                    ><img src={previousImg} alt="" /> </button>
                </div>
                <div className='btn-toolbar'>
                    {numbers.map(number => (
                        
                            <div className='btn-group me-2'>
                                <button
                                    type="button"
                                    class="btn btn-primary mt-2"
                                    key={number}
                                    onClick={() => setPage(number)}
                                >{number}</button>
                            </div>
                        
                        // <button
                        //     className='button-page'
                        //     key={number}
                        //     onClick={() => setPage(number)}
                        // >
                        //     {number}
                        // </button>
                    ))}
                </div>



                <div className='col-xs-6'>
                    <button
                        onClick={() => setPage(page + 1)}
                        disabled={page === lastPage}
                        className='header-button button-xs-header btn btn-primary mt-2'
                    ><img src={nextImg} alt="" /></button>
                </div>

            </div>

        </div>
    );
};

export default Pokedex;