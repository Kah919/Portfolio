import React from 'react';
import styles from './Resume.module.css';
import cx from 'classnames';

export default props => {
    return (
        <div>
            <h1> Education </h1>
            <div className={styles.flatiron}>
                <h2> Flatiron School </h2>
                <h2 className="hide"> Brooklyn, NY </h2>
            </div>

            <div className="">
                <h4> Full Stack Developer </h4>
                <h4 className="hide"> March 2019 </h4>
            </div>

            <div className="queens">
                <h2> CUNY Queens College </h2>
                <h2 className="hide"> Queens, NY </h2>
            </div>

            <div className="">
                <h4> Bachelors of Psychology </h4>
                <h4 className="hide"> December 2016 </h4>
            </div>
        </div>
    )
}