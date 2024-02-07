import React, {useReducer} from 'react';
import './counter.css';
import {reducer} from './counterReducer'

const Counter = () =>{
    const initialState = { count : 0};
    const [state, dispatch] = useReducer(reducer, initialState);

    const increaseCounter=() =>{
        dispatch({type: 'Increase'})
    }
    const decreaseCounter=() =>{
        dispatch({type: 'Decrease'})
    }
    const resetCounter=() =>{
        dispatch({type: 'Reset'})
    }
    return(
        <div className='counter-main'> 
            <h1>Counter Using useReducer</h1>
            <div className='counter-text'>Count: {state.count}</div>
            <button className="counter-btn" onClick={increaseCounter}>Increment</button>
            <button className="counter-btn" onClick={decreaseCounter}>Decrement</button>
            <button className="counter-btn" onClick={resetCounter}>Reset</button>
        </div>
    )
}

export default Counter;