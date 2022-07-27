import React, { useState } from 'react';
import { changeName } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import pokemonTrainer from './img/pokemon-trainer.jpg'
import pokemon1 from './img/pokemon3.jpg'


const UserInput = () => {

    const [userName, setUserName] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault()

        dispatch(changeName(userName))
        navigate('/pokedex')
    }

    return (
        <div>
            
            <div className='login-container'>
                <div>
                    <h1>Hello Trainer!</h1>
                </div>
                <div>
                    <img src={pokemonTrainer} alt="" />
                    <p>Give me your name to start</p>
                </div>
                <form onSubmit={submit}>
                    <input
                        type="text"
                        value={userName}
                        onChange={e => setUserName(e.target.value)} />
                    <button><i class="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>
            

        </div>
    );
};

export default UserInput;