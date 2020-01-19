import React, { Component } from "react";
import "../components/styles/hours-and-location-page.css";
import kbbqImage from "../images/man-cooking.jpg";
import Footer from "../components/footer";
import Header from "../components/newheader";
import SEO from "../components/seo"

class HoursAndLocationPage extends Component {
  render() {
    return (
      <div>
        <SEO
          title="Meokja Meokja Meokja Korean BBQ Hours & Location"
          description="Meokja Meokja Meokja Korean BBQ Hours & Location"
        />
        <Header/>
        <div className="hours-and-location-page-container">
          <img
            src={kbbqImage}
            alt="korean-bbq-pic"
            className="image"
          />
          <div className="hours-and-location-title-container">
            <h1 className="hours-and-location-title">{"Hours & Location"}</h1>
          </div>
        </div>
        <div className="main-content">
        <div className="main-content-body">
          <h1 className="main-content-headers">Hours</h1>

            <h3 className="main-content-secondary-headers">Sunday - Thursday: 11am – 12am</h3>
            <h3 className="main-content-secondary-headers">Friday - Saturday: 11am - 2am</h3>
          </div>
          <div className="main-content-body">
          <h1 className="main-content-headers">Location</h1>
          <h3 className="main-content-secondary-headers">12345 Broad Street, Washington DC 23220</h3>
          </div>
          <div className="main-content-body">
          <h1 className="main-content-headers">Reservations</h1>
          <h3 className="main-content-secondary-headers">Phone: 123-456-7890</h3>
          <h3 className="main-content-secondary-headers">Email: info@restaurant.com</h3>
          <br/>
          <br/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HoursAndLocationPage;
