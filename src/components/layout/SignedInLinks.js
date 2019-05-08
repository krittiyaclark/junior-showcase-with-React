import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    return (
        <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item">
                <NavLink to="/create" className="nav-link">New Project</NavLink>
            </li>
            <li className="nav-item">
                <a onClick={props.signOut}>Log Out</a>
            </li>
            <li className="nav-item">
                <NavLink to="/" className="btn bg-info rounded-circle nav-link">CK</NavLink>
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