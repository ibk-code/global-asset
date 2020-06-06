import React from 'react';
import API from '../../components/api/api'
import axios from 'axios';
import queryString from 'query-string';
import './loginpage.style.css';
import { Link } from 'react-router-dom';

class LogIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:" ",
            email: " ",
            password: "",
            btcId: " ",
            plan: "A day plan",
            referralId: " ",
        }
    }

    getrefIdparam = () => {

        let url = this.props.location.search;
        const params = queryString.parse(url);
        const {referralId} = params
        if (referralId) {
            this.setState({referralId: referralId})
            console.log(referralId)
        }
    }

    handleSignUp = async (e) => {
        e.preventDefault();
        this.getrefIdparam();

        const url = `http://localhost:5000/api/auth/signup`

        axios({
            method: 'post',
            url: url,
            data:{
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                plan: this.state.plan,
                btcId: this.state.btcId,
                referralId: this.state.referralId
            }
        }).then(res => {
            console.log(res);
        }).catch(() => {
            throw new Error("An error occured")
        })
    }


    render() {
        return (

            <div className="input-fields">
                <form id='login' onSubmit={this.handleSignUp}>
                    <h2>Login</h2>
                    <label>Username </label>
                    <input type='text' name='name' className='input' placeholder='Userame' required onChange={e => {
                        this.setState({name: e.target.value})}} />
                    <label>Email </label>
                    <input type='email' name='email' className='input' placeholder='email' required onChange={e => {
                        this.setState({email: e.target.value})
                    }} />
                    <label>Password </label>
                    <input type='password' name='password' className='input' placeholder='password' required onChange={e => {
                        this.setState({password: e.target.value})}} />
                    <label>Btc Id</label>
                    <input type='text' name='btcid' className='input' placeholder='btc id' required onChange={e => {
                        this.setState({btcId: e.target.value})}} />
                    <label>Select Plan</label>
                    <select name="plan" required className="input" onChange={e => {
                        this.setState({plan: e.target.value})}} value={this.state.plan}>
                        <option value="A day plan">A day plan</option>
                        <option value="3 days plan">3 days plan</option>
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