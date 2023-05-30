import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const onClickHome = () => {
        navigate("/")
    }
    return (
        <div>
            <h2>login</h2>
            <div className='d-flex justify-content-center'>
                <form className='w-25 p-3 border'>
                    <div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder='Enter your email' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" placeholder='Enter your password' />
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
                <div>
                    <button className='btn btn-warning' onClick={onClickHome}>X</button>
                </div>
            </div>
        </div>
    )
}

export default Login
