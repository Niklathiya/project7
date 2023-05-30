import React, { useContext } from 'react'
import { FirstName } from '../App'

const Project = () => {
    const user= useContext(FirstName);
    return (
        <div>
            <h2>Project</h2>
            <h3>Project:- {user.hobby}</h3>
        </div>
    )
}

export default Project
