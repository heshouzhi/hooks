import React, { useState, useRef, useEffect } from 'react'


export default () => {
    const [count, setCount] = useState(0);

    const prevCountRef = useRef(0);
    useEffect(() => {
        prevCountRef.current = count;
        console.log("我后执行")
        console.log('test11111')
    });
    const prevCount = prevCountRef.current;

    return <div>
        <h1>Now: {count}, before: {prevCount}</h1>
        {console.log("我先执行")}
        <button onClick={() => setCount(count + 1)}>更新count</button>
    </div>;
}