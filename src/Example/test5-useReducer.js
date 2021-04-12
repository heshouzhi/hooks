import React, { useState, useReducer } from "react";

const Example = () => {
    const [count, dispatch] = useReducer((state, action)=>{
        switch(action.type) {
            case 'add' :
                return state + 1
            case 'sub' :
                return state -1 
            default : 
                return state
        }
    }, 0)

    return (
        <div>
            <h1>现在的值是{count}</h1>
            <button onClick={()=>{dispatch({ type: 'add' })}}>++++++</button>
            <button onClick={()=>{dispatch({ type: 'sub' })}}>------</button>
        </div>
    )
    
}

export default Example;