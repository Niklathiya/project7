import React, { useContext } from 'react'
import { FirstName } from '../App'

const Home = () => {
    const user = useContext(FirstName)
    return (
        <div>
            <h2>Home</h2>
            <h3>Hello, {user.name}</h3>
        </div>
    )
}

export default Home




