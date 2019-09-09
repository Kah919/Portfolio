import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import nasi from '../background/nasi.png';
import hangry from '../background/hangry.png';
import food from '../background/food.png';
import friends from '../background/friends.png';
import ohsnap1 from '../background/ohsnap1.png';
import ohsnap2 from '../background/ohsnap2.png';
import ohsnap3 from '../background/ohsnap3.png';


class Projects extends Component {
  render() {
    return(
      <div className="projects__container">

        <div className="project">
          <div className="description">
            <h1> Hangry</h1>
            <h3> Hungry? Don't know what to eat? Getting Angry? </h3>
            <br></br>
            <p> Find out what recipes you can make by inputting the ingredients that you have. </p>
            <p> Browse through hundreds of recipes from different cuisines and add them to your favorites. </p>
            <p> Follow your friends and see what food they are craving! </p>
          </div>

          <div className="project__image">
            <AwesomeSlider>
              <div data-src={nasi} />
              <div data-src={hangry} />
              <div data-src={food} />
              <div data-src={friends} />
            </AwesomeSlider>
          </div>
        </div>

        <div className="project">
          <div className="description">
            <h1> OhSnap! </h1>
            <h3> A place for passionate photograhers to share their work </h3>
            oh
          </div>

          <div className="project__image">
            <AwesomeSlider>
              <div data-src={ohsnap1} />
              <div data-src={ohsnap2} />
              <div data-src={ohsnap3} />
            </AwesomeSlider>
          </div>
        </div>

      </div>
    )
  }
}

export default Projects;
