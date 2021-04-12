import React, { useContext } from 'react';
import { ColorContext } from "./color";

const ShowArea = (props) => {

    const {color} = useContext(ColorContext)
    return (
        <div style={{ color: color }}>颜色是：{color}</div>
    )
}

export default ShowArea