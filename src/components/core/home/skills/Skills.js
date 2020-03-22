import React from 'react';
import classes from './skills.module.css';

const Skills = () => {
    const skills = [
        { name: 'ReactJS', url: 'https://reactjs.org' },
        { name: 'Angular', url: 'https://angular.io' },
        { name: 'NodeJS', url: 'https://nodejs.org/en/' },
        { name: 'Express', url: 'https://expressjs.com/' },
        { name: 'Docker', url: 'https://www.docker.com/' },
        { name: 'MongoDB', url: 'https://www.mongodb.com/' },
        { name: 'SQL', url: 'https://en.wikipedia.org/wiki/SQL' },
        { name: 'MEAN & MERN', url: '' },
        { name: 'Full Stack Development', url: '' },
        { name: 'DOMO', url: 'https://www.domo.com/' },
        { name: 'Data Analytics', url: '' },
        { name: 'Big Data', url: '' },
        { name: 'Spark', url: '' },
        { name: 'Hadoop', url: '' },
        { name: 'RESTAPI', url: '' },
        { name: 'Microservices', url: '' }
    ];
    function renderList() {
        return skills.map((skill) => {
            return (
                <li className={classes.list}>
                    <a className={classes.link}
                        target="_blank" rel="noopener noreferrer"
                        href={skill.url}>{skill.name}</a>
                </li>

            );
        })
    }
    return (
        <div>
            <div className={classes.heading}><b>My Skills</b></div>
            <div>
                <ul className={classes.ulist}>
                    {renderList()}
                </ul>
            </div>
        </div>
    );
}

export default Skills;