import React from 'react';

import './loginpage.style.css';
import { Link } from 'react-router-dom';

class LogIn extends React.Component {
    render() {
        return (

            <div className="input-fields">
                <form id='login'>
                    <h2>Login</h2>
                    <label>Username </label>
                    <input type='text' name='name' className='input' placeholder='Userame' required />
                    <label>Email </label>
                    <input type='email' name='email' className='input' placeholder='email' required />
                    <label>Password </label>
                    <input type='password' name='password' className='input' placeholder='password' required />
                    <label>Select Plan</label>
                    <select name="plan" required className="input">
                        <option value="Day plan">Day Plan</option>
                        <option value="3 Days plan">3 Days Plan</option>
                        <option value="Trader plan">Trader plan</option>
                        <option value="Gold plan">Gold plan</option>
                    </select>
                    <p>Dont have an account ?<Link to='/Signup'> Sign Up </Link></p>
                    <button type='submit' >Login </button>

                </form>
            </div>

        )
    }
}
export default LogIn;