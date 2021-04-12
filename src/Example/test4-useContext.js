import React, { useState, createContext, useContext } from 'react'


const CountContext = createContext()

const CountChild = () => {
    let count = useContext(CountContext)
    return <h2>{count}</h2>
}
const Example1 = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={()=>{setCount(count+1)}}>点击</button>
            <h1>{count}</h1>
            <CountContext.Provider value={count}>
                <CountChild />
            </CountContext.Provider>
        </div>
    )
}

export default Example1