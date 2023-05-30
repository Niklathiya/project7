import React, { useContext } from 'react'
import { FirstName } from '../App'

const Service = () => {
    const user = useContext(FirstName);
    return (
        <div>
            <h2>Service</h2>
            <h3>Service:- {user.service}</h3>
        </div>
    )
}

export default Service
