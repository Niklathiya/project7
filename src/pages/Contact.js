import React, { useContext } from 'react'
import { FirstName } from '../App'

const Contact = () => {
    const user = useContext(FirstName);
    return (
        <div>
            <h2>Contact</h2>
            <h3>Call us:- {user.number}</h3>
        </div>
    )
}

export default Contact
