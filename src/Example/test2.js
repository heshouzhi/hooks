import React, { useState } from 'react'
//useState 不能存在条件判断里,这个会报错，
let statue = true
const Example2 = () => {
    const [age, setAge] = useState('18')
    if(statue) {//里面报错
        const [sex, setSex] = useState('男')
        statue = false
    }
    
    return (
        <>
           <h1> 我今年：{age}</h1>
           <h1> 性别：{sex}</h1>
        </>
    )
}

export default Example2