import React, { useContext } from 'react'
import { FirstName } from '../App'

const Help = () => {
    const user = useContext(FirstName);
    return (
        <div>
            <h2>Help</h2>
            <h3>When i need help:- {user.help}</h3>
        </div>
    )
}

export default Help
