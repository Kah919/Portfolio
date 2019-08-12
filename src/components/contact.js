import React from 'react';
import Typist from 'react-typist';

const Contact = () => {
  return(
    <div className="contact__container">
      <Typist avgTypingDelay={60}>
        <span> You can reach me on... </span>
        <Typist.Backspace count={24} delay={300} />
      <span>
        <a href="https://github.com/kah919" className="fa fa-github-alt"> GitHub</a>  <a href="https://www.linkedin.com/in/kah-m-yap/" className="fa fa-linkedin-square"> LinkedIn</a>  <a href="https://medium.com/@kahyap13" className="fa fa-medium"> Medium</a>
        <span className="fa fa-envelope-o"> kahyap13@gmail.com </span>
        <span className="fa fa-phone"> 718-708-1881 </span>
      </span>

      </Typist>
    </div>
  )
}

export default Contact;
