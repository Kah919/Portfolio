import React from 'react';
import styles from './Resume.module.css';
import Education from './Education';
import Summary from './Summary';
import Contact from './Contact';
import TechnicalProject from './TechnicalProject';
import WorkExperience from './WorkExperience';
import TechnicalSkills from './TechnicalSkills';


const Resume = () => {
  return(
    <div className={ styles.resume__container }>
      <Contact />
      <Summary />
      <TechnicalSkills />
      <TechnicalProject />
      <WorkExperience />
      <Education />
    </div>
  )
}

export default Resume;
