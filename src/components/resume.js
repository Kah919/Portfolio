import React from 'react';

const Resume = () => {


  return(
    <div className="resume__container">
      <h1 className="resume__name"> Kah Yap </h1>
      <h5> (718) 708-1881 | kahyap13@gmail.com </h5>
      <h5> <a href="https://github.com/kah919" className="fa fa-github-alt"> GitHub</a> | <a href="https://www.linkedin.com/in/kah-m-yap/" className="fa fa-linkedin-square"> LinkedIn</a> | <a href="https://medium.com/@kahyap13" className="fa fa-medium"> Medium</a> </h5>

      <h2> Summary </h2>
      <p>
        Full stack web developer with a passion to create practical apps that put a smile on people’s face.
        With experience in Ruby, Ruby on Rails, JavaScript, React, Redux and a background in psychology and sales,
        I strive to incorporate easy to navigate UI and user friendly features.
      </p>

      <h2> Technical Project </h2>
      <div className="project__container">
        <h3> Hangry: React | Ruby on Rails - <a href="https://github.com/Kah919/mod5-hangry-frontend" className="fa fa-github-alt"> </a> <a href="http://media.licdn.com/embeds/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FiGV7HZYQ4ck%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DiGV7HZYQ4ck&amp;type=text%2Fhtml&amp;schema=youtube" className="fa fa-youtube"> </a> </h3>
        <p className="project__caption"> See what recipes you can make and what your friends are craving </p>
        <i className="fa fa-github-alt"> Implemented JWT for authentication with Ruby on Rails and persisted login by saving it to the Redux store </i>
        <i className="fa fa-github-alt"> Fetched from an external API for keywords used in a recipe, responses can save by making a POST request to Rails </i>
      </div>

      <div className="project__container">
        <h3> Web Stock: React | Ruby on Rails - <a href="https://github.com/Kah919/ttp-fs-frontend" className="fa fa-github-alt"> </a></h3>
        <p className="project__caption"> Buy stocks at their current price and watch how your stocks grow over time </p>
        <i className="fa fa-github-alt"> User information is stored in Redux store for immediate access to the user, stock, and transaction model </i>
        <i className="fa fa-github-alt"> Fetched from an Rails back-end server and external API to view a whether a user is profiting </i>
      </div>

      <div className="project__container">
        <h3> Web Atlas: JavaScript - <a href="https://github.com/milespucarelli/Flatiron-TechFest2019/tree/adserver" className="fa fa-github-alt"> </a></h3>
        <p className="project__caption"> Assist users with navigating the web by giving instructions when hovering over elements </p>
        <i className="fa fa-github-alt"> Used event listeners to highlights links, navigation elements, inputs, etc. to identify what parts of a site are interactive </i>
        <i className="fa fa-github-alt"> Incorporated a list of malware and ads to be filtered so when the element is hovered it will display a warning label </i>
      </div>

      <div className="project__container">
        <h3> OhSnap: Ruby on Rails - <a href="https://github.com/lsamano/OhSnap" className="fa fa-github-alt"></a> <a href="https://agile-fjord-75909.herokuapp.com/login" className="fa fa-gamepad"></a></h3>
        <p className="project__caption"> Social media for photographers to upload their work and gain inspiration </p>
        <i className="fa fa-github-alt"> Implemented active storage for users to upload images files and have it saved to a model for other users to view </i>
        <i className="fa fa-github-alt"> Incorporated media query to make the app responsive and adapt to different screen resolutions </i>
      </div>

      <h2> Technical Skills </h2>
      <i className="fa fa-laptop"> Programming: HTML/CSS, SQL, Ruby, Ruby on Rails, JavaScript, and React/Redux </i>
      <i className="fa fa-laptop"> Technology: GitHub, Postman, Bootstrap, Semantic UI, Gimp, RawTherapee, and Lightroom </i>

      <h2> Professional Experience </h2>

      <div className="project__container">
        <div className="work__container">
          <h2> Crystal Windows</h2>
          <h2> Flushing, NY </h2>
        </div>

        <div className="work__container">
          <h4> Sales Representative </h4>
          <h4> May 2017 – September 2017 </h4>
        </div>

        <i className="fa fa-github-alt"> Implemented active storage for users to upload images files and have it saved to a model for other users to view </i>
        <i className="fa fa-github-alt"> Incorporated media query to make the app responsive and adapt to different screen resolutions </i>
      </div>

      <div className="project__container">
        <div className="work__container">
          <h2> Taiyaki </h2>
          <h2> New York, NY </h2>
        </div>

        <div className="work__container">
          <h4> Team Member </h4>
          <h4> September 2016 - May 2017 </h4>
        </div>

        <i className="fa fa-github-alt"> Utilized social media platforms as a cost-effective method to promote Taiyaki and was awarded most popular by Yelp </i>
        <i className="fa fa-github-alt"> Trained new employees on proper food preparation procedures and daily responsibilities to ensure efficient work flow </i>
      </div>

      <div className="project__container">
        <div className="work__container">
          <h2> CUNY Service Corps </h2>
          <h2> Queens, NY </h2>
        </div>

        <div className="work__container">
          <h4> Stem Mentor </h4>
          <h4> August 2014 – August 2015 </h4>
        </div>

        <i className="fa fa-github-alt"> Taught children and older adults basic computer programs and how to navigate the web through demonstrations </i>
        <i className="fa fa-github-alt"> Created lesson plans and science experiments based on their developmental stage and personal interest </i>
      </div>

      <h2> Education </h2>

      <div className="project__container">
        <div className="work__container">
          <h2> Flatiron School </h2>
          <h2> Brooklyn, NY </h2>
        </div>

        <div className="work__container">
          <h4> Full Stack Developer </h4>
          <h4> March 2019 </h4>
        </div>

        <div className="work__container education">
          <h2> CUNY Queens College </h2>
          <h2> Queens, NY </h2>
        </div>

        <div className="work__container education">
          <h4> Bachelors of Psychology </h4>
          <h4> December 2016 </h4>
        </div>
      </div>


    </div>
  )
}

export default Resume;
