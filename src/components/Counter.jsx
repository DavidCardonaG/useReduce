import React, { useReducer } from 'react'
import {couterReducer,initialState,init} from '../reducers/couterReducer'
import {types} from '../types/types'
import '../styles/styles.css'
const Counter = () => {
  const [counter, dispatch] = useReducer(couterReducer, initialState, init)

    return (
        <div className="container mt-3">
            <h1>Counter: {counter} </h1>
            <hr />

            <button
            id="btn"
                className="btn btn-primary"
                onClick={() => {
                    dispatch({type:types.increment})
                }}
            >
                +1
            </button>
            <button
            id="btn2"
                className="btn btn-primary"
                onClick={() => {
                    dispatch({type:types.reset})
                }}
            >
                Reset
            </button>
            <button
            id="btn"
                className="btn btn-primary"
                onClick={() => {
                    dispatch({type:types.decrement})
                }}
            >
                -1
            </button>
        </div>

    )
}

export default Counter
