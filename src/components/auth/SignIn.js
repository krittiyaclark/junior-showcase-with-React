import React, { Component } from 'react';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
      }
      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
      }
    
    render() {  
        return (
            <div className="container">
            <form onSubmit={ this.handleSubmit } className="bg-white">
                <h5 className="text-grey">SignIn</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={ this.handleChange } />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={ this.handleChange } />
                </div>
                <div className="input-field">
                    <button className="btn bg-info">LogIn</button>
                </div>
            </form>
            </div>
        )
    }
}

export default SignIn;
