import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Navbar extends Component {
  state = {
    active: false,
    redirect: ""
  }

  burger = () => {
    this.setState({
      active: !this.state.active
    })
  }

  redirect = event => {
    this.setState({
      redirect: event.target.innerText
    })
  }

  renderRedirect = () => {
    if(this.state.redirect) {
      return <Redirect to={`/${this.state.redirect}`}/>
    }
  }

  render() {
    console.log(this.state.redirect)
    return (
      <div className="nav__container">
        {this.renderRedirect()}
        <div className="logo"> KY </div>
        <div className={this.state.active ? "navbar__list nav__active navbar__li__active" : "navbar__list"}>
          <li className="navLinkFade streak" onClick={this.redirect}> Home </li>
          <li className="navLinkFade" onClick={this.redirect}> Resume </li>
          <li className="navLinkFade" onClick={this.redirect}> Portfolio </li>
          <li className="navLinkFade" onClick={this.redirect}> Contact </li>
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
