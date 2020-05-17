import React from 'react';
import styles from './Resume.module.css';
import cx from 'classnames';

export default props => {
    return (
        <>
            <h2> Education </h2>
            <div className={ styles.container}>
                <div className={ styles.education }>
                    <h3> Flatiron School </h3>
                    <h3> Full Stack Developer </h3>
                </div>


                <div className={ styles.education }>
                    <h3> CUNY Queens College </h3>
                    <h3> Bachelors of Psychology </h3>
                </div>
            </div>
        </>
    )
}