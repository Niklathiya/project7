import React, { useContext } from 'react'
import { FirstName } from '../App'

const Blog = () => {
    const user = useContext(FirstName);
    return (
        <div>
            <h2>Blog</h2>
            <h3>Gender:- {user.gender}</h3>
        </div>
    )
}

export default Blog
