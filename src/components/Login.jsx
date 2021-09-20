import React, { useReducer } from 'react'
import {login,logout} from '../actions/authAction'
import { authReducer,initialState } from '../reducers/authReducer'
import '../styles/styles.css'

export const Login = () => {
    const [state, dispatch] = useReducer(authReducer, initialState)
    return (
        <div>
              <h1>Login</h1>
                <p>Usuario: {state.name}</p>
                <p>Clave: {state.uid}</p>
                <hr />

            <hr />
            <button 
            id="btn"
                className="btn btn-primary" 
                onClick ={()=>dispatch(login('12345','David Cardona'))}
            >
                Login
            </button>
            <button 
            id="btn"
                className="btn btn-danger" 
                onClick ={()=>dispatch(logout())}
            >
                Logout
            </button>
        </div>
    )
}
