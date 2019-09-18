import React, { Component } from 'react';
import Typist from 'react-typist';

class Contact extends Component {
  state = {
    print: ""
  }

  type = () => {
      return(
          <p className="type"> {this.state.print} </p>
      )
  }

  click = e => {
    this.setState({
      print: e.target.classList.contains("fa-phone") ? "718-708-1881" : "kahyap13@gmail.com"
    })
  }

  render() {
    return(
      <div className="contact__container">
        <div className="icons">
          {this.state.print ? this.type() : <p className="type">You can contact me on</p>}
          <a href="https://github.com/kah919" className="fa fa-github-alt" />
          <a href="https://www.linkedin.com/in/kah-m-yap/" className="fa fa-linkedin" />
          <a className="fa fa-phone" onMouseEnter={this.click}/>
          <a className="fa fa-envelope" onMouseEnter={this.click}/>
        </div>
      </div>
    )
  }
}

export default Contact;
