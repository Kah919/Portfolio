import React, { Component } from 'react';
import Project from './projects'


class Portfolio extends Component {
  render() {
    return(
      <div className="portfolio__grid">
        <Project />
      </div>
    )
  }
}

export default Portfolio;
