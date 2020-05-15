import React from 'react';
import styles from './Resume.module.css';

export default props => {
    return(
        <>
            <h2> Technical Project </h2>

            <div className="project__container">
            <h3 className="streak"> COVID-19 Visualizer: React - <a href="https://github.com/Kah919/COVID-19-Visualizer" className="fa fa-github-alt"></a> <a href="https://kah919.github.io/COVID-19-Visualizer/" className="fa fa-gamepad"></a>
            </h3>

            <p className="project__caption"> View global data and timeline from the COVID-19 Pandemic </p>
            <i className="fa fa-github-alt"> Incorporated a svg map of the USA that allows users to view data on the state that was clicked </i>
            <i className="fa fa-github-alt"> Implemented tables, charts, graphs, and timelines for visual tracking of the spread of COVID-19 </i>
            </div>

            <div className="project__container">
            <h3 className="streak"> NameRater: MongoDB | Express | React | Node - <a href="https://github.com/Kah919/NameRater" className="fa fa-github-alt"></a>
            </h3>

            <p className="project__caption"> How popular is your name? </p>
            <i className="fa fa-github-alt"> Used MERN stack to create a database of first names from the Social Security Administration </i>
            <i className="fa fa-github-alt"> Incorporated React Hooks to easily manipulate state without creating class components </i>
            </div>

            <div className="project__container">
            <h3 className="streak"> Hangry: React | Ruby on Rails - <a href="https://github.com/Kah919/mod5-hangry-frontend" className="fa fa-github-alt"> </a> <a href="http://media.licdn.com/embeds/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FiGV7HZYQ4ck%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DiGV7HZYQ4ck&amp;type=text%2Fhtml&amp;schema=youtube" className="fa fa-youtube"> </a> 
            </h3>

            <p className="project__caption"> See what recipes you can make and what your friends are craving </p>
            <i className="fa fa-github-alt"> Implemented JWT for authentication with Ruby on Rails and persisted login by saving it to the Redux store </i>
            <i className="fa fa-github-alt"> Fetched from an external API for keywords used in a recipe, responses can save by making a POST request to Rails </i>
            </div>

            <div className="project__container">
            <h3 className="streak"> Web Stock: React | Ruby on Rails - <a href="https://github.com/Kah919/ttp-fs-frontend" className="fa fa-github-alt"> </a> <a href="https://stocks-simulator-front.herokuapp.com/" className="fa fa-gamepad"></a>
            </h3>

            <p className="project__caption"> Buy stocks at their current price and watch how your stocks grow over time </p>
            <i className="fa fa-github-alt"> User information is stored in Redux store for immediate access to the user, stock, and transaction model </i>
            <i className="fa fa-github-alt"> Fetched from an Rails back-end server and external API to view a whether a user is profiting </i>
            </div>

            <div className="project__container">
            <h3 className="streak"> Web Atlas: JavaScript - <a href="https://github.com/milespucarelli/Flatiron-TechFest2019/tree/adserver" className="fa fa-github-alt"> </a> <a href="http://media.licdn.com/embeds/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F1Kr-_lcfLTQ%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1Kr-_lcfLTQ&amp;type=text%2Fhtml&amp;schema=youtube" className="fa fa-youtube"> </a>
            </h3>

            <p className="project__caption"> Assist users with navigating the web by giving instructions when hovering over elements </p>
            <i className="fa fa-github-alt"> Used event listeners to highlights links, navigation elements, inputs, etc. to identify what parts of a site are interactive </i>
            <i className="fa fa-github-alt"> Incorporated a list of malware and ads to be filtered so when the element is hovered it will display a warning label </i>
            </div>

            <div className="project__container">
            <h3 className="streak"> OhSnap: Ruby on Rails - <a href="https://github.com/lsamano/OhSnap" className="fa fa-github-alt"></a> <a href="https://agile-fjord-75909.herokuapp.com/login" className="fa fa-gamepad"></a> <a href="http://media.licdn.com/embeds/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FORTxjsZOac8%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DORTxjsZOac8&amp;type=text%2Fhtml&amp;schema=youtube" className="fa fa-youtube"> </a>
            </h3>
            
            <p className="project__caption"> Social media for photographers to upload their work and gain inspiration </p>
            <i className="fa fa-github-alt"> Implemented active storage for users to upload images files and have it saved to a model for other users to view </i>
            <i className="fa fa-github-alt"> Incorporated media query to make the app responsive and adapt to different screen resolutions </i>
            </div>
        </>
    )
}