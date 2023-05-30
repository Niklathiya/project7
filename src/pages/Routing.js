import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from '../pages/layout/default/DefaultLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Service from '../pages/Service';
import Vlog from '../pages/Vlog';
import Contact from '../pages/Contact';
import Help from '../pages/Help';
import Project from '../pages/Project';
import Work from '../pages/Work';
import Login from '../pages/Login';

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<DefaultLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/Blog" element={<Blog />} />
                        <Route path="/Service" element={<Service />} />
                        <Route path="/Vlog" element={<Vlog />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path="/Help" element={<Help />} />
                        <Route path="/Project" element={<Project />} />
                        <Route path="/Work" element={<Work />} />
                    </Route>
                    <Route path='/Login' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing
