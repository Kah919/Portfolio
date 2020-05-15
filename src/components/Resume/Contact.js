import React from 'react';
import styles from './Resume.module.css';
import cx from 'classnames';

export default props => {
    return(
        <div className={ styles.contact }>
            <h1> Kah Yap </h1>
            <h5> (718) 708-1881 | kahyap13@gmail.com </h5>
            <h5> <a href="https://github.com/kah919" className="fa fa-github-alt streak"> GitHub </a> | <a href="https://www.linkedin.com/in/kah-m-yap/" className="fa fa-linkedin-square streak"> LinkedIn </a> | <a href="https://medium.com/@kahyap13" className="fa fa-medium streak"> Medium </a> </h5>
        </div>
    )
}