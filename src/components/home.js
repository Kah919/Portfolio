import React, { Component } from 'react';
import Typist from 'react-typist';

class Home extends Component {
  render() {
    return(
      <div className="home__container">
        <Typist avgTypingDelay={100}>
          <span> Hello my name is kha :/ </span>
            <Typist.Backspace count={8} delay={600} />
          <span> Kah :) </span>
            <Typist.Backspace count={7} delay={600} />
            <span> I am a </span>
            <Typist.Backspace count={25} delay={70} />
            <span> I am a Full-Stack Developer :^) </span>
        </Typist>
      </div>
    )
  }
}

export default Home;
