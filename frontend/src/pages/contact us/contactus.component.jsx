import React from "react";
import "./contactus.style.css";

import Footer from "../../components/footer/footer.component";

import Head2 from "../../components/head2/head2.component";

class ContactUs extends React.Component {
  constructor() {
    super();
    {
      this.state = {
        Contact: {
          name: "",
          phone: "",
          email: "",
          message: "",
        },
      };
    }
  }
  handleInput = (e) => {};

  addItem = (e) => {};

  render() {
    return (
      <div className="about">
        <Head2> Contact Us </Head2>
        <div className="wrapper">
          <div className="contact-form">
            <div className="input-fields">
              <form id="contact" onSubmit={this.addItem}>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                  required
                  value={this.state.Contact.name}
                  onChange={this.handleInput}
                />
                <input
                  type="text"
                  name="Phone"
                  className="input"
                  placeholder="Phone No."
                  value={this.state.Contact.phone}
                  onChange={this.handleInput}
                />
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  reduired
                  value={this.state.Contact.email}
                  onChange={this.handleInput}
                />
                <textarea
                  className="msg"
                  placeholder="Message"
                  value={this.state.Contact.message}
                  onChange={this.handleInput}
                />
                <button type="submit">SEND</button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactUs;
