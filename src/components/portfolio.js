import React, { Component } from 'react';
import Animation from './animation'
import Project from './projects'


class Portfolio extends Component {
  state = {
    project: false
  }

  showProject = () => {
    return this.state.project ? <Project /> : <Animation />
  }

  reveal = () => {
    setTimeout(() => {
      this.setState({
        project: true
      })
    }, 3000);
  }

  render() {
    return(
      <div className="portfolio__grid">
        <div>
        {this.reveal()}
        {this.showProject()}
        </div>
      </div>
    )
  }
}

export default Portfolio;
