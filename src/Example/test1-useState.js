import React, { useState } from 'react'

const Example1 = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <button onClick={()=>{setCount(count+1)}}>点击</button>
            <h1>{count}</h1>
        </>
    )
}

export default Example1