import React from 'react';
import styles from './Resume.module.css';

export default props => {    
    const projectData = [
        {
            name: 'COVID-19 Visualizer: React - ',
            caption: 'View global data and timeline from the COVID-19 Pandemic',
            links: [
                { link: 'https://kah919.github.io/COVID-19-Visualizer/', icon: 'fa fa-gamepad' },
                { link: 'https://github.com/Kah919/COVID-19-Visualizer', icon: 'fa fa-github-alt'}
            ],
            bullets: [
                'Incorporated a svg map of the USA that allows users to view data on the state that was clicked',
                'Implemented tables, charts, graphs, and timelines for visual tracking of the spread of COVID-19',
            ],   
        },
        {
            name: 'NameRater: MongoDB | Express | React | Node - ',
            caption: 'How popular is your name?',
            links: [
                { link: 'https://github.com/Kah919/NameRater', icon: 'fa fa-github-alt'}
            ],
            bullets: [
                'Used MERN stack to create a database of first names from the Social Security Administration',
                'Incorporated React Hooks to easily manipulate state without creating class components',
            ],   
        },
        {
            name: 'Hangry: React | Ruby on Rails - ',
            caption: 'See what recipes you can make and what your friends are craving',
            links: [
                { link: 'https://github.com/Kah919/mod5-hangry-frontend', icon: 'fa fa-github-alt'},
                { link: 'http://media.licdn.com/embeds/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FiGV7HZYQ4ck%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DiGV7HZYQ4ck&amp;type=text%2Fhtml&amp;schema=youtube', icon: 'fa fa-youtube'},
            ],
            bullets: [
                'Implemented JWT for authentication with Ruby on Rails and persisted login by saving it to the Redux store',
                'Fetched from an external API for keywords used in a recipe, responses can save by making a POST request to Rails',
            ],   
        },
        {
            name: 'Web Stock: React | Ruby on Rails - ',
            caption: 'Buy stocks at their current price and watch how your stocks grow over time',
            links: [
                { link: 'https://github.com/Kah919/ttp-fs-frontend', icon: 'fa fa-github-alt'},
                { link: 'https://stocks-simulator-front.herokuapp.com/', icon: 'fa fa-gamepad'},
            ],
            bullets: [
                'User information is stored in Redux store for immediate access to the user, stock, and transaction model',
                'Fetched from an Rails back-end server and external API to view a whether a user is profiting',
            ],
        },
        {
            name: 'Web Atlas: JavaScript - ',
            caption: 'Assist users with navigating the web by giving instructions when hovering over elements',
            links: [
                { link: 'https://github.com/milespucarelli/Flatiron-TechFest2019/tree/adserver', icon: 'fa fa-github-alt'},
                { link: 'http://media.licdn.com/embeds/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F1Kr-_lcfLTQ%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1Kr-_lcfLTQ&amp;type=text%2Fhtml&amp;schema=youtube', icon: 'fa fa-youtube'},
            ],
            bullets: [
                'Used event listeners to highlights links, navigation elements, inputs, etc. to identify what parts of a site are interactive',
                'Incorporated a list of malware and ads to be filtered so when the element is hovered it will display a warning label',
            ],
        },
        {
            name: 'OhSnap: Ruby on Rails - ',
            caption: 'Social media for photographers to upload their work and gain inspiration',
            links: [
                { link: 'https://github.com/lsamano/OhSnap', icon: 'fa fa-github-alt'},
                { link: 'https://agile-fjord-75909.herokuapp.com/login', icon: 'fa fa-gamepad'},
                { link: 'http://media.licdn.com/embeds/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FORTxjsZOac8%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DORTxjsZOac8&amp;type=text%2Fhtml&amp;schema=youtube', icon: 'fa fa-youtube'},
            ],
            bullets: [
                'Implemented active storage for users to upload images files and have it saved to a model for other users to view',
                'Incorporated media query to make the app responsive and adapt to different screen resolutions',
            ],
        },
    ]

    const createProjects = () => {
        const { name, caption, bullets, links } = projectData;

        return projectData.map(project => 
            <div className={ styles.project__container}>
                    <h3> { project.name }  
                    { createLinks(project.links) }
                    </h3>
                    
                    <p className="project__caption"> { project.caption } </p>

                    { createBullets(project.bullets) }
            </div>    
        )
    }

    const createLinks = links => {
        return links.map(link => 
            <a href={ link.link } className={ link.icon }></a>
        )
    }

    const createBullets = bullets => {
        return bullets.map(bullet => 
            <div className={styles.bullet }>
                <span className="fa fa-github-alt" ></span>
                <p> { bullet } </p>
            </div>
        )
    }

    return(
        <>
            <h2> Technical Project </h2>

            <div className={ styles.container }>
                { createProjects() }
            </div>
        </>
    )
}