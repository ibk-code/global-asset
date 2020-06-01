import React from 'react';

import './signup.style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            email: " ",
            password: " "
        }
    }

    handleLogin = async (e) => {
        e.preventDefault();

        const url = `http://localhost:5000/api/auth/login`

        axios({
            method: 'post',
            url: url,
            data:{
                email: this.state.email,
                password: this.state.password
            }
        }).then(res => {
            console.log(res.data);
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (

            <div className="input-fields">
                <form id='login' onSubmit={this.handleLogin}>
                    <h2>Sign Up </h2>

                    <label>Email </label>
                    <input type='email' name='email' className='input' placeholder='email' required onChange={ e => {
                        this.setState({email: e.target.value})
                    }}/>
                    <label>Password </label>
                    <input type='password' name='password' className='input' placeholder='password' required onChange={ e => {
                        this.setState({password: e.target.value})
                    }}/>
                    <p>Already Have an Account ?<Link to='/Login'> Login </Link></p>
                    <button type='submit' >Sign Up </button>

                </form>
            </div>

        )
    }
}
export default Signup;