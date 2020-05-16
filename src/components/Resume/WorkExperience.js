import React from 'react';
import styles from './Resume.module.css';

export default props => {
    const workData = [
        {
            name: 'Lurik Labs',
            position: 'Web Developer Intern',
            dates: 'October 2019 - February 2020',
            bullets: [
                'Create functional React components of Figma files from the graphic designs team',
                'Improve SEO and user accessibility with the use of Meta Tags and mobile responsiveness',
            ],   
        },
        {
            name: 'Crystal Windows',
            position: 'Sales Representative',
            dates: 'May 2017 – September 2017',
            bullets: [
                'Coordinated with production, shipping, and warehouse department to ensure timely completion of client orders',
                'Created blueprints of product designs, dimensions, and cost of client’s order for the production team to manufacture',
            ],   
        },
        {
            name: 'Queens College Peer Counseling',
            position: 'Peer Counselor',
            dates: 'September 2015 - December 2016',
            bullets: [
                'Developed rapport and provided confidential counseling and guidance to students who are in distress',
                'Store clients’ information into the database for future case management',
            ],   
        },
        {
            name: 'Taiyaki',
            position: 'Team Member',
            dates: 'September 2016 - May 2017',
            bullets: [
                'Utilized social media platforms as a cost-effective method to promote Taiyaki and was awarded most popular by Yelp',
                'Trained new employees on proper food preparation procedures and daily responsibilities to ensure efficient work flow',
            ],   
        },
        {
            name: 'CUNY Service Corps',
            position: 'Stem Mentor',
            dates: 'August 2014 – August 2015',
            bullets: [
                'Taught children and older adults basic computer programs and how to navigate the web through demonstrations',
                'Created lesson plans and science experiments based on their developmental stage and personal interest',
            ],   
        },
    ]

    const createWorkExperience = () => {
        const { name, position, dates, bullets } = workData;
        return workData.map(work => 
            <div>
                <div className={ styles.project__container}>
                    <h3> { work.name } </h3>
                    <p className="project__caption"> { work.position } </p>
                    { createBullets(work.bullets) }
                </div>
            </div>    
        )
    }

    const createBullets = bullets => {
        return bullets.map(bullet => 
            <div className={ styles.bullet }>
                <span className="fa fa-github-alt" ></span>
                <p> { bullet } </p>
            </div>
        )
    }

    return(
        <>
            <h2> Professional Experience </h2>

            <div className={ styles.container }>
                { createWorkExperience() }
            </div>
        </>
    )
}