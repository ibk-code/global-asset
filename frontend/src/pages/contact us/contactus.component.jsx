import React from "react";
import "./contactus.style.css";
import axios from "axios";

import Footer from "../../components/footer/footer.component";

import Head2 from "../../components/head2/head2.component";

class ContactUs extends React.Component {
  constructor() {
    super();
    {
      this.state = {
        name: "",
        phone: "",
        email: "",
        message: "",
        status: false,
        statusMessage: ""
      };
    }
  }

  submitMessage = (e) => {
    e.preventDefault();
    if (this.state.name && this.state.phone && this.state.email && this.state.message !== " ") {
      const url = `http://localhost:5000/api/user/contact`;
      axios({
        method: "post",
        url: url,
        data: {
          name: this.state.name,
          phone: this.state.phone,
          email: this.state.email,
          message: this.state.message,
        },
      })
        .then((res) => {
          console.log(res);
          this.setState({
            name: " ",
            phone: " ",
            email: " ",
            message: " ",
            status: true,
            statusMessage: "Your information was successfully submited. Thank you for contacting us."
          })
        })
        .catch(() => {
          this.setState({
            status: true,
            statusMessage: "Your information was not submited, try again"
          })
        });
    }else{
      this.setState({
        status: true,
        statusMessage: "Fill the whole field"
      })
    }

  };

  render() {
    return (
      <div className="about">
        <Head2> Contact Us </Head2>
        <div className="wrapper">
          <div className="contact-form">
            <div className="input-fields">
              <form id="contact" onSubmit={this.submitMessage}>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                  required
                  value={this.state.name}
                  onChange={(e) => {
                    this.setState({ name: e.target.value, status: false });
                  }}
                />
                <input
                  type="text"
                  name="Phone"
                  className="input"
                  placeholder="Phone No."
                  value={this.state.phone}
                  onChange={(e) => {
                    this.setState({ phone: e.target.value });
                  }}
                />
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  required
                  value={this.state.email}
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
                <textarea
                  className="msg"
                  placeholder="Message"
                  value={this.state.message}
                  onChange={(e) => {
                    this.setState({ message: e.target.value });
                  }}
                />
                <button type="submit">SEND</button>
              </form>
                <p>{this.state.status && this.state.statusMessage}</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactUs;
