import React, { useReducer } from 'react'
import "./App.css"

function App() {

    let initialState = 0;
    let reducer = (state, action) => {
        switch (action) {
            
            case "add": return state = state + 1;
            case "minus": return state = state - 1;
            case "reset": return initialState
            default: return state

        }
    }
    let [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className='counter'>
            <h1> {state} </h1>
            <div className="btn-container">
                <button onClick={() => dispatch("add")}> Increase </button>
                <button onClick={() => dispatch("reset")}> Reset </button>
                <button onClick={() => dispatch("minus")}> Decrease </button>
            </div>
        </div>
    )
}

export default App
