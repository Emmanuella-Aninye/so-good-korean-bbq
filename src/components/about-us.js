import React, { Component } from "react"
import "./styles/about-us.css"

const content="Your Next Meal Destination"
class AboutUs extends Component {
  render() {
    return (
      <div className="about-us-container">
        <div className="about-us-content">
          <h1 className="about-us-content-title">{content.toLocaleUpperCase()}</h1>
          <h3 className="about-us-content-sub-title">
            Savor the classic flavors of traditional Korean BBQ in a sleek,
            modern setting.
          </h3>
          <h3 className="about-us-content-info">
            Reservations are recommended. Please call in early to secure your
            table.
          </h3>
        </div>

        <div className="about-us-content">
          <h3 className="about-us-content-times">Sunday-Thursday: 11am–12am</h3>
          <h3 className="about-us-content-times">Friday-Saturday: 11am–2am</h3>
          <br/>
          <h3 className="about-us-content-times">12345 Broad Street, Richmond VA 23220</h3>
          <h3 className="about-us-content-times">
          123.456.7890
          </h3>
        </div>
      </div>
    )
  }
}

export default AboutUs
