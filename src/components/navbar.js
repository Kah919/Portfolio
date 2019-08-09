import React, { Component } from 'react';

class Navbar extends Component {
  state = {
    active: false
  }

  burger = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <div className="nav__container">
        <div className="logo"> KY </div>
        <div className={this.state.active ? "navbar__list nav__active navbar__li__active" : "navbar__list"}>
          <li className="navLinkFade"> Home </li>
          <li className="navLinkFade"> Resume </li>
          <li className="navLinkFade"> Portfolio </li>
          <li className="navLinkFade"> Contact </li>
        </div>

        <div className="burger" onClick={this.burger}>
          <div className={this.state.active ? "line1" : null}> </div>
          <div className={this.state.active ? "line2" : null}> </div>
          <div className={this.state.active ? "line3" : null}> </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
