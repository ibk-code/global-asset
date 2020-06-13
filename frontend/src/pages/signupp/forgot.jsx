import React from "react";
import axios from "axios";
import history from "../../history";
import "./signup.style.css";

class Forgot extends React.Component {
  constructor() {
    super();
    this.state = {
      email: " ",
      password: " ",
      success: false,
      status: false,
      statusMessage: " "
    };
  }

  changePassword = (e) => {
    e.preventDefault();
    const url = `https://global-asset.herokuapp.com/api/auth/forgotpassword`;

    axios({
      method: "put",
      url: url,
      data: {
        email: this.state.email,
        newPassword: this.state.password,
      },
    })
      .then((res) => {
        history.push("/Login");
      })
      .catch((e) => {
        this.setState({
          status: true,
          statusMessage: e.response.data.message
        })
      });
  };

  render() {
    return (
      <div className="input-fields">
        <form id="login" onSubmit={this.changePassword}>
          <h2>Forgot Password </h2>

          <label>Registerd Email </label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="email"
            required
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
          <label>New Password </label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="password"
            required
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          />
          <button type="submit">Submit </button>
          <p style={{color: "red", textAlign: "center"}}>{this.state.status && this.state.statusMessage}</p>
        </form>
      </div>
    );
  }
}
export default Forgot;
