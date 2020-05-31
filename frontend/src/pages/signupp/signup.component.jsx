import React from 'react';

import './signup.style.css';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    constructor() {
        super();



    }
    render() {
        return (

            <div className="input-fields">
                <form id='login'>
                    <h2>Sign Up </h2>

                    <label>Email </label>
                    <input type='email' name='email' className='input' placeholder='email' required />
                    <label>Password </label>
                    <input type='password' name='password' className='input' placeholder='password' reduired />
                    <p>Already Have an Account ?<Link to='/Login'> Login </Link></p>
                    <button type='submit' >Sign Up </button>

                </form>
            </div>

        )
    }
}
export default Signup;