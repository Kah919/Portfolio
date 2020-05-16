import React from 'react';
import styles from './Resume.module.css';

export default props => {
    return(
        <>
            <h2> Technical Skills </h2>
            
            <div className={ styles.container }>

                <div className={styles.bullet }>
                    <span className="fa fa-laptop" ></span>
                    <p> Programming: HTML/CSS, JavaScript, React/Redux, Node, Express, Ruby, Ruby on Rails </p>
                </div>

                <div className={ styles.bullet }>
                    <span className="fa fa-laptop" ></span>
                    <p> Technology: GitHub, Git, Postman, MongoDB, Mongoose, Bootstrap, Semantic UI, Jira, Heroku, Jest, Gimp, RawTherapee, Lightroom </p>
                </div>
            </div>
        </>
    )
}