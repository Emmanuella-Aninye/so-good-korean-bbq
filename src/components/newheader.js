import React from "react"
import "./styles/header.css"
import hamburger from "../images/hamburger.svg"
import Drawer from "@material-ui/core/Drawer"
import CloseIcon from "@material-ui/icons/Close"
import { Link } from "gatsby"

//then in your component
class header extends React.Component {
  state = {
    active: false,
  }
  handleClick = () => {
    console.log("here")
    this.setState({ active: !this.state.active })
  }
  render() {
    return (
      <div className="header">
        <Link to="/">
          <h1 className="restaurant-name">{"Meokja Meokja Meokja"}</h1>
        </Link>
        <div className="menu-items">
          <Link to="/menu-page/">
            <h1 className="menu-names">{"Menu"}</h1>
          </Link>
          <Link to="/hours-and-location-page/">
            <h1 className="menu-names">{"Hours & Location"}</h1>
          </Link>
          <Link to="/join-us/">
            <h1 className="menu-names">{"Join Us"}</h1>
          </Link>
        </div>
        <img
          src={hamburger}
          className="hamburger"
          onClick={() => {
            this.handleClick()
          }}
        />
        <Drawer variant="temporary" anchor="right" open={this.state.active} transitionDuration={ {enter:500, exit:500} }>
          <div className="drawer">
            <div className="close-icon">
              <CloseIcon
                onClick={() => {
                  this.handleClick()
                }}
              />
            </div>
            <div style={{ padding: 32, textAlign: "center" }}>
              <Link to="/">
                <h1 className="menu-drawer-items">Home</h1>
              </Link>
              <Link to="/menu-page/">
                <h1 className="menu-drawer-items">Menu</h1>
              </Link>
              <Link to="/hours-and-location-page/">
                <h1 className="menu-drawer-items">Hours & Location</h1>
              </Link>
              <Link to="/join-us/">
              <h1 className="menu-drawer-items">Join Us</h1>
          </Link>
            </div>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default header
