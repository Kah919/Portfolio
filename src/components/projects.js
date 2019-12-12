import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import nasi from '../background/nasi.png';
import hangry from '../background/hangry.png';
import food from '../background/food.png';
import friends from '../background/friends.png';
import ohsnap1 from '../background/ohsnap1.png';
import ohsnap2 from '../background/ohsnap2.png';
import ohsnap3 from '../background/ohsnap3.png';
import stock1 from '../background/stock1.png';
import stock2 from '../background/stock2.png';



export default props => {
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
            <h1> ÖhSnap </h1>
            <h3> A place for passionate photograhers to share their work </h3>
            <br></br>
            <p> Follow your favorite photographers and customize your news feed! </p>
            <p> Post your favorite pictures to share with others. </p>
            <p> Check out the updates and new posts in real time! </p>
          </div>

          <div className="project__image">
            <AwesomeSlider>
              <div data-src={ohsnap1} />
              <div data-src={ohsnap2} />
              <div data-src={ohsnap3} />
            </AwesomeSlider>
          </div>
        </div>

        <div className="project">
          <div className="description">
            <h1> Stock Simulator </h1>
            <h3> Practice buying stocks with this realtime simulator </h3>
            <br></br>
            <p> Create an account with a starting balance of $5000 </p>
            <p> Watch how your investments change in realtime  </p>
          </div>

          <div className="project__image">
            <AwesomeSlider>
              <div data-src={stock1} />
              <div data-src={stock2} />
            </AwesomeSlider>
          </div>
        </div>

      </div>
    )
  
}

