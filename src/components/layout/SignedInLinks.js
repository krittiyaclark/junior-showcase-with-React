import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <NavLink to="/" className="nav-link">New Project</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/" className="nav-link">Log Out</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/" className="btn justify-content-end bg-info rounded-circle nav-link">CK</NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinks;