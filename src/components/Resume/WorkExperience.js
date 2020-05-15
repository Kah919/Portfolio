import React from 'react';
import styles from './Resume.module.css';

export default props => {
    return(
        <>
            <h2> Professional Experience </h2>

            <div className="project__container">
                <div className="work__container">
                <h2> Lurik Labs</h2>
                <h2 className="hide"> Flushing, NY </h2>
                </div>

                <div className="work__container">
                <h4> Web Developer Intern </h4>
                <h4 className="hide"> October 2019 - February 2020 </h4>
                </div>

                <i className="fa fa-github-alt"> Create functional React components of Figma files from the graphic designs team </i>
                <i className="fa fa-github-alt"> Improve SEO and user accessibility with the use of Meta Tags and mobile responsiveness </i>
            </div>

            <div className="project__container">
                <div className="work__container">
                <h2> Crystal Windows</h2>
                <h2 className="hide"> Flushing, NY </h2>
                </div>

                <div className="work__container">
                <h4> Sales Representative </h4>
                <h4 className="hide"> May 2017 – September 2017 </h4>
                </div>

                <i className="fa fa-github-alt"> Coordinated with production, shipping, and warehouse department to ensure timely completion of client orders </i>
                <i className="fa fa-github-alt"> Created blueprints of product designs, dimensions, and cost of client’s order for the production team to manufacture </i>
            </div>

            <div className="project__container">
                <div className="work__container">
                <h2> Queens College Peer Counseling</h2>
                <h2 className="hide"> Flushing, NY </h2>
                </div>

                <div className="work__container">
                <h4> Peer Counselor </h4>
                <h4 className="hide"> September 2015 - December 2016 </h4>
                </div>

                <i className="fa fa-github-alt"> Developed rapport and provided confidential counseling and guidance to students who are in distress </i>
                <i className="fa fa-github-alt"> Store clients’ information into the database for future case management </i>
            </div>

            <div className="project__container">
                <div className="work__container">
                <h2> Taiyaki </h2>
                <h2 className="hide"> New York, NY </h2>
                </div>

                <div className="work__container">
                <h4> Team Member </h4>
                <h4 className="hide"> September 2016 - May 2017 </h4>
                </div>

                <i className="fa fa-github-alt"> Utilized social media platforms as a cost-effective method to promote Taiyaki and was awarded most popular by Yelp </i>
                <i className="fa fa-github-alt"> Trained new employees on proper food preparation procedures and daily responsibilities to ensure efficient work flow </i>
            </div>

            <div className="project__container">
                <div className="work__container">
                <h2> CUNY Service Corps </h2>
                <h2 className="hide"> Queens, NY </h2>
                </div>

                <div className="work__container">
                <h4> Stem Mentor </h4>
                <h4 className="hide"> August 2014 – August 2015 </h4>
                </div>

                <i className="fa fa-github-alt"> Taught children and older adults basic computer programs and how to navigate the web through demonstrations </i>
                <i className="fa fa-github-alt"> Created lesson plans and science experiments based on their developmental stage and personal interest </i>
            </div>
        </>
    )
}