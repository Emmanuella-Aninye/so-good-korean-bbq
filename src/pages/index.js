import React, { Component } from "react";
import "../components/styles/landing-page.css";
import kbbqImage from "../images/kbbq.jpg";
import Footer from "../components/footer";
import Header from '../components/newheader'
import AboutUs from '../components/about-us'

import SEO from "../components/seo"

class LandingPage extends Component {
  render() {
    return (
      <div>
    <SEO title="Meokja Meokja Meokja Korean BBQ" description="Delicious meat grilled on the finest coals for a one of a kind dining experience." />
        <Header/>
        <div className="landing-page-container">
          <img
            src={kbbqImage}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="korean-bbq-pic"
          />
          <div className="restaurant-title-container">
            <div className="restaurant-title">
            Meokja Meokja Meokja
            <h1 className="restaurant-description">
              Providing the Finest Korean BBQ Experience. Come Eat!
            </h1>
            </div>

          </div>
        </div>
        <AboutUs/>
        <Footer/>
      </div>
    );
  }
}

export default LandingPage;
