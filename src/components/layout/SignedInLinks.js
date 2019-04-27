import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item">
                <NavLink to="/create" className="nav-link">New Project</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/" className="nav-link">Log Out</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/" className="btn bg-info rounded-circle nav-link">CK</NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinks;