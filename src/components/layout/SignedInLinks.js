import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    return (
        <ul className="navbar-nav d-flex">
            <li className="nav-item">
                <NavLink to="/create" className="nav-link">New Project</NavLink>
            </li>
            <li className="nav-item">
                <a onClick={props.signOut} className="nav-link">Log Out</a>
            </li>
            <li className="nav-item">
                <NavLink to="/" className="btn bg-info rounded-circle nav-link">
                    {props.profile.initials}
                </NavLink>
            </li>
        </ul>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()) 
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);