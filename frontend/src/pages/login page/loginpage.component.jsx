import React from "react";
import API from "../../components/api/api";
import axios from "axios";
import queryString from "query-string";
import "./loginpage.style.css";
import { GlobalContext } from "../../GlobalContextClass";
import { Link, Redirect } from "react-router-dom";
import history from "../../history";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GlobalContext.Consumer>
        {(context) => (
          // context.loggedIn ?  history.push('/user') :
          <React.Fragment>
            <div className="input-fields">
              <form id="login" onSubmit={context.handleSignUp}>
                <h2>Sign Up</h2>
                <label>Username </label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Userame"
                  required
                  onChange={context.updateName}
                />
                <label>Email </label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="email"
                  required
                  onChange={context.updateEmail}
                />
                <label>Password </label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="password"
                  required
                  onChange={context.updatePassword}
                />
                <label>Wallet Address</label>
                <input
                  type="text"
                  name="wallet address"
                  className="input"
                  placeholder="Wallet Address"
                  required
                  onChange={context.updateWalletAddress}
                />
                <label>Select Plan</label>
                <select
                  name="plan"
                  required
                  className="input"
                  onChange={context.updatePlan}
                  value={context.state.plan}
                >
                  <option value="A day plan">A day plan</option>
                  <option value="3 days plan">3 days plan</option>
                  <option value="Trader plan">Trader plan</option>
                  <option value="Gold plan">Gold plan</option>
                </select>
                <p style={{color: "red", textAlign: "center"}}>{context.state.status && context.state.statusMessage}</p>
                <p>
                  Alredy have an account ?<Link to="/Login"> Sign In </Link>
                </p>
                <button type="submit">Sign Up </button>
              </form>
            </div>
          </React.Fragment>
        )}
      </GlobalContext.Consumer>
    );
  }
}
export default LogIn;
