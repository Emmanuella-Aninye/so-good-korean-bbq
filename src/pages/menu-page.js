import React, { Component } from "react"
import "../components/styles/menu-page.css"
import kbbqImage from "../images/kbbq7.jpg"
import Footer from "../components/footer"
import Header from "../components/newheader"
import SEO from "../components/seo"

const menuItems = [
  {
    name: "St. Louis-Style Spareribs",
    price: 22.0,
    description:
      "Hand-rubbed with Dave’s secret blend of spices and pit-smoked for 3-4 hours over a smoldering hickory fire",
  },
  {
    name: "Dan Dan Noodles",
    price: 12.0,
    description:
      "Delicious noodles covered in a peanut, bean paste, spacy soy sauce",
  },
  {
    name: "Fatty Brisket",
    price: 10.0,
    description:
      "Tender cuts of fatty brisket served with coarse solt and seasame oil",
  },
  {
    name: "Pinapple braised bulgolgi",
    price: 9.0,
    description:
      "Traditional Bulgoi beef marinated with pinapple for added sweetness and tenderness of meat",
  },
  {
    name: "Spicy Pork Bulgogi",
    price: 15.0,
    description: "Pork Bulgogi marinated in spicy sauce",
  },
  {
    name: "Soy Garlic Pork Belly",
    price: 12.0,
    description: "thinly sliced pork belly marinated in a soysauce",
  },
]
class MenuPage extends Component {
  render() {
    return (
      <div>
        <SEO
          title="So Good Korean BBQ Menu"
          description="So Good Korean BBQ Menu"
        />
        <Header />
        <div className="menu-page-container">
          <img
          className="menu-page-image"
            src={kbbqImage}
            alt="korean-bbq-pic"
          />
          <div className="menu-page-title-container">
            <h1 className="menu-page-title">{"Menu"}</h1>
          </div>
        </div>
        <div className="main-content">
          <div style={{ paddingBottom: 16 }}>
            <h1 className="menu-top-header">6-COURSE TASTING SETS</h1>
            <h1 className="menu-top-header-subtext">
              Delicious food segmented into exquisite sections and pheonemnal
              names.
            </h1>
          </div>
          <div style={{ paddingBottom: 32 }}>
            <h1 className="sub-menu-header">APPETIZER</h1>
            <h1 className="sub-menu-header-subtext">
              FOR TWO | 70 • FOR FOUR | 135
            </h1>
          </div>
          <div className="menu-section">
            {menuItems.map(item => {
              return (
                <div style={{ marginBottom: 32, width: "100%" }}>
                  <div
                    style={{
                      display: "inline-flex",
                      textAlign: "left",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <h1 className="menu-item-name">
                      {item.name.toLocaleUpperCase()}
                    </h1>
                    <h1 className="menu-item-price">{item.price}</h1>
                  </div>

                  <h1 className="menu-item-description">{item.description}</h1>
                </div>
              )
            })}
          </div>
          <h1 className="sub-menu-header">ENTREE</h1>
          <h1 className="sub-menu-header-subtext">
            FOR TWO | 70 • FOR FOUR | 135
          </h1>
          <div className="menu-section">
            {menuItems.map(item => {
              return (
                <div style={{ marginBottom: 32, width: "100%" }}>
                  <div
                    style={{
                      display: "inline-flex",
                      textAlign: "left",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <h1 className="menu-item-name">
                      {item.name.toLocaleUpperCase()}
                    </h1>
                    <h1 className="menu-item-price">{item.price}</h1>
                  </div>

                  <h1 className="menu-item-description">{item.description}</h1>
                </div>
              )
            })}
          </div>
          <h1 className="sub-menu-header">DESSERT</h1>
          <h1 className="sub-menu-header-subtext">
            FOR TWO | 70 • FOR FOUR | 135
          </h1>
          <div className="menu-section">
            {menuItems.map(item => {
              return (
                <div style={{ marginBottom: 32, width: "100%" }}>
                  <div
                    style={{
                      display: "inline-flex",
                      textAlign: "left",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <h1 className="menu-item-name">
                      {item.name.toLocaleUpperCase()}
                    </h1>
                    <h1 className="menu-item-price">{item.price}</h1>
                  </div>

                  <h1 className="menu-item-description">{item.description}</h1>
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

export default MenuPage
