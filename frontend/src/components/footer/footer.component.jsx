import React from "react";

import "./footer.style.css";

import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="foot">
        <div className="first-portion">
          <div className="text-section5">
            <h3>customer support</h3>
            <p>
              No answerin Machines or bots only communication with real people
              ready to run through a brick wall for you!! we talk to you in the
              messanger of your choice
            </p>
          </div>
        </div>
      </div>
      <div className="final">
        <div className="final2">
          <h3>GLOBAL ASSET </h3>
          <p>Copyright Global-asset 2020 </p>
          <div className="icons2">
            <Link>
              <FaTwitter />
            </Link>
            <Link>
              <FaFacebookF />
            </Link>
            <Link>
              <FaWhatsapp />
            </Link>
            <Link>
              {" "}
              <MdEmail />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
