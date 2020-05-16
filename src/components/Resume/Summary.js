import React from 'react';
import styles from './Resume.module.css';

export default props => {
    return (
        <>
            <h2> Summary </h2>
            <div className={ styles.container }>
                <p className={ styles.summary }>
                    Full stack web developer with a passion for learning and creating web apps that put a smile on people’s face.
                    My goal is to one day improve the lives of others with the lines of code that I write and mentor others in coding.
                </p>
            </div>
        </>
    )
}