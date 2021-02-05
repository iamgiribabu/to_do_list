import React, {useState} from 'react';
import './input.css';
import {useDispatch} from 'react-redux';
import {saveTodo} from '../features/todoSlice';

const Input = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const addToDo = () =>{
        dispatch(saveTodo({
            item : input,
            done : false,
            id : Date.now()
        }))
        document.getElementById('txt').value ='';
    }
    return (
        <div className='input'>
            <input id='txt' type='text' value={input} onChange={e=>setInput(e.target.value)} />
            <button onClick={addToDo}>ADD!</button>
        </div>
    )
}

export default Input
