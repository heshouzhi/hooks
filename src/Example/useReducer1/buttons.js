import React, { useContext } from "react";
import { ColorContext, UPDATE_COLOR } from './color'

const Button = () => {
    const { dispatch } = useContext(ColorContext)
    return (
        <div>
            <button onClick={()=>{dispatch({ type: UPDATE_COLOR, color: "blue" })}}>这是蓝色</button>
            <button onClick={()=>{dispatch({ type: UPDATE_COLOR, color: "red" })}}>这是红色</button>
        </div>
    )
}

export default Button;