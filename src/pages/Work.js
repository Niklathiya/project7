import React, { useContext } from 'react'
import { FirstName } from '../App'

const Work = () => {
    const user = useContext(FirstName);
    return (
        <div>
            <h2>Work</h2>
            <h3>Work Address:- {user.work}</h3>
        </div>
    )
}

export default Work
