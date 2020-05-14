import React, { useState } from 'react';
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
import Project from './Project/Project';



export default props => {
    const data = [
      {
        name: 'Hangry',
        description: "Hungry? Don't know what to eat? Getting Angry?",
        text: [
          "Find out what recipes you can make by inputting the ingredients that you have.",
          "Browse through hundreds of recipes from different cuisines and add them to your favorites.",
          "Follow your friends and see what food they are craving!"
        ],
        images: [
          nasi,
          hangry,
          food,
          friends,
        ]
      },
      {
        name: 'ÖhSnap',
        description: "A place for passionate photograhers to share their work",
        text: [
          "Follow your favorite photographers and customize your news feed!",
          "Post your favorite pictures to share with others.",
          "Check out the updates and new posts in real time!"
        ],
        images: [
          ohsnap1,
          ohsnap2,
          ohsnap3,
        ]
      },
      {
        name: 'Stock Simulator',
        description: "Practice buying stocks with this realtime simulator",
        text: [
          "Create an account with a starting balance of $5000",
          "Watch how your investments change in realtime.",
        ],
        images: [
          stock1,
          stock2,
        ]
      },
    ];

    const populateProjects = () => {
      return data.map(project => <Project data={ project } />)
    }

    return(
      <div className="projects__container">
        { populateProjects() }
      </div>
    )
}

