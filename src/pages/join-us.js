import React, { Component } from "react"
import "../components/styles/join-us.css"
import chefImage from "../images/chef.jpg"
import Footer from "../components/footer"
import Header from "../components/newheader"
import SEO from "../components/seo"
import Divider from "@material-ui/core/Divider"
const roles = [
  {
    name: "BARTENDER",
    description:
      "You and your team ensure patrons have a spectacular bar experience and keep the bar stocked with top-notch alcoholic beverages.",
  },
  {
    name: "HOST / CASHIER",
    description:
      "You greet patrons like family, get them seated comfortably, and do everything you can to make sure they leave with a smile.",
  },
  {
    name: "SERVER",
    description:
      "You work with a dynamic team to impress every patron with our Meokja Meokja Meokja Korean BBQ values and spectacular customer service.",
  },
]
class JoinUs extends Component {
  render() {
    return (
      <div>
        <SEO
          title="Meokja Meokja Meokja Korean BBQ - join our team"
          description="Meokja Meokja Meokja Korean BBQ- find open roles or apply for a position"
        />
        <Header />
        <div className="join-us-cointainer">
          <div className="hours-and-location-page-container">
            <img src={chefImage} alt="korean-bbq-pic" className="image" />
            <div className="hours-and-location-title-container">
              <h1 className="hours-and-location-title">{"Join our team"}</h1>
            </div>
          </div>
          <div className="join-us-content">
            <h3 className="join-us-description">
              So you want to join the Meokja Meokja Meokja Korean BBQ team?
            </h3>
          </div>
          <Divider style={{ margin: "0px 32px" }} />

          <div className="join-us-content">
            {roles.map(role => {
              return (
                <div className="roles-div">
                  <h1 className="roles-title">{role.name}</h1>
                  <div style={{width:'100%'}}>
                  <p className="roles-descroption">{role.description}</p>
                  <p className="roles-descroption">
                    Contact info@meokja.com for more info
                  </p>
                  <Divider style={{ margin: '8px 0px' }} />
                </div>
                </div>
              )
            })}
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default JoinUs
