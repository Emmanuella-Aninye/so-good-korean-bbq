import React, { Component } from "react";
import "./styles/footer.css";
import facebookIcon from "../images/facebook-icon.svg";
import instagramIcon from "../images/instagram-icon.svg";
import yelpIcon from "../images/yelp-icon.svg";
import twiiterIcon from "../images/twitter-icon.svg";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <img
          src={facebookIcon}
          alt="facebook-icon"
          className="footer-icons"
          onClick={() => window.open("https://facebook.com", "_blank")}
        />
        <img
          src={instagramIcon}
          alt="instagram-icon"
          className="footer-icons"
          onClick={() => window.open("https://instagram.com", "_blank")}
        />
        <img
          src={twiiterIcon}
          alt="twitter-icon"
          className="footer-icons"
          onClick={() => window.open("https://twitter.com", "_blank")}
        />
        <img
          src={yelpIcon}
          alt="yelp-icon"
          className="footer-icons"
          onClick={() => window.open("https://yelp.com", "_blank")}
        />
      </div>
    );
  }
}

export default Footer;
