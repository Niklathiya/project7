import React, { useContext } from 'react'
import { FirstName } from '../App'

const Vlog = () => {
    const user = useContext(FirstName);
    return (
        <div>
            <h2>Vlog</h2>
            <h3>New video uploaded:- {user.vlog}</h3>
        </div>
    )
}

export default Vlog
