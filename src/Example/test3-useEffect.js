import React, { useState, useEffect, useDebugValue } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import _ from "lodash";

const Index = () => {
    useEffect(()=>{
        console.log('我进入到了index、')
        return () => {
            console.log('我离开了index、')
        }
    }, [])
    return <h2>Index</h2>
}

//组件里面effect里return一个函数，第一个参数传【】就==componentWillUnmount()执行
//这个生命周期函数，如果没有return，就==componentDidMount()
const List = () => {
    useEffect(()=>{
        console.log('我进入到了list、')
        return () => {
            console.log('我离开了list、')
        }
    }, [])
    return <h2>List</h2>
}

const Example1 = () => {
    const [count, setCount] = useState(0)

    useDebugValue(count>5?'大于5':'小于等于5')
    useEffect(()=>{
        console.log('count',count)
        return () => {
            console.log('==========')
        }
    }, [count])
    
    return (
        <>
            <button onClick={()=>{setCount(count+1)}}>点击</button>
            <h1>{count}</h1>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list" component={List} />
            </Router>
        </>
    )
}

export default Example1