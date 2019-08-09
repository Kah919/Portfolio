import React from 'react';

const Resume = () => {
  return(
    <div className="resume__container">
      <h1 className="resume__name"> Kah Yap </h1>
      <h5> (718) 708-1881 | github.com/kah919 | kahyap13@gmail.com | linkedin.com/in/kah-m-yap/ | medium.com/@kahyap13 </h5>

      <h2> Summary </h2>
      <p>
        Full stack web developer with a passion to create practical apps that put a smile on people’s face.
        With experience in Ruby, Ruby on Rails, JavaScript, React, Redux and a background in psychology and sales,
        I strive to incorporate easy to navigate UI and user friendly apps.
      </p>

      <h2> Technical Project </h2>
      <h3> Hangry - Demo – React | Ruby on Rails </h3>
      <i class="fa fa-github-alt"> Implemented JWT for authentication with Ruby on Rails and persisted login by saving it to the Redux store </i>
      <i class="fa fa-github-alt"> Fetched from an external API for keywords used in a recipe, responses can save by making a POST request to Rails </i>

      <h3> Web Atlas - Github – JavaScript </h3>
      <i class="fa fa-github-alt"> Used event listeners to highlights links, navigation elements, inputs, etc. to identify what parts of a site are interactive </i>
      <i class="fa fa-github-alt"> Incorporated a list of malware and ads to be filtered so when the element is hovered it will display a warning label
 </i>

      <h3> OhSnap - Demo – Ruby on Rails </h3>
      <i class="fa fa-github-alt"> Implemented active storage for users to upload images files and have it saved to a model for other users to view </i>
      <i class="fa fa-github-alt"> Incorporated media query to make the app responsive and adapt to different screen resolutions </i>
    </div>
  )
}

export default Resume;
