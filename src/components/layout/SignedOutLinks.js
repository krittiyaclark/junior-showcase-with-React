import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink to="/signUp" className="nav-link">Signup</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/signIn" className="nav-link">Login</NavLink>
            </li>
        </ul>
    )
}

export default SignedOutLinks;