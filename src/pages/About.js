import React, { useContext } from 'react'
import { FirstName } from '../App';

const About = () => {
    const user = useContext(FirstName)
    return (
        <div>
            <h2>About</h2>
            <h3>Age:- {user.age}  </h3>
        </div>
    )
}

export default About
