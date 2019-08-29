import React from 'react';

const StarWars = () => {
  return(
    <div className="credits__container">
      <div className="fade"></div>

      <section className="star-wars">
      <div className="crawl">
        <div className="contacts">
          <h1> You can contact </h1>
          <h1> me through </h1>
          <h1> ... </h1>

          <h1 className="fa fa-envelope-o"> kahyap13@gmail.com </h1>
          <br></br>
          <h1 className="fa fa-phone"> 718-708-1881 </h1>
          <div className="contact__info__container">
            <span> <a href="https://www.linkedin.com/in/kah-m-yap/" className="fa fa-linkedin-square"> LinkedIn</a> </span>
            <br></br>
            <span> <a href="https://github.com/kah919" className="fa fa-github-alt"> GitHub</a> </span>
            <br></br>
            <span> <a href="https://medium.com/@kahyap13" className="fa fa-medium"> Medium</a> </span>
          </div>
        </div>


      </div>
      </section>
    </div>
  )
}

export default StarWars;
