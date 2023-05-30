import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="p-2 d-flex justify-content-between align-items-center">
                <div>
                    <Link to="/"><img src='image/selmon.jpg' width={'60px'} height={"60px"} /></Link>
                </div>
                <div className='fw-bold mt-2'>
                    <ul className="me-auto mb-2 d-flex justify-content-between list-unstyled">
                        <li className='ps-3 pe-3'>
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className='ps-3 pe-3'>
                            <Link to="/About" className="nav-link">About</Link>
                        </li>
                        <li className='ps-3 pe-3'>
                            <Link to="/Blog" className="nav-link">Blog</Link>
                        </li>
                        <li className='ps-3 pe-3'>
                            <Link to="/Service" className="nav-link">Service</Link>
                        </li>
                        <li className='ps-3 pe-3'>
                            <Link to="/Vlog" className="nav-link">Vlog</Link>
                        </li>
                        <li className='ps-3 pe-3'>
                            <Link to="/Contact" className="nav-link">Contact Us</Link>
                        </li>
                        <li className='ps-3 pe-3'>
                            <Link to="/Help" className="nav-link">Help</Link>
                        </li>
                        <li className='ps-3 pe-3'>
                            <Link to="/Project" className="nav-link">Project</Link>
                        </li>
                        <li className='ps-3 pe-3'>
                            <Link to="/Work" className="nav-link">Work</Link>
                        </li>
                        <li className='ps-3 pe-3'>
                            <Link to="/Login" className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Header
