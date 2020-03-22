import React from 'react';
import classes from './skills.module.css';

const Skills = () => {
    const skills = [
        { name: 'ReactJS', url: 'https://reactjs.org', id: 1 },
        { name: 'Angular', url: 'https://angular.io', id: 2 },
        { name: 'NodeJS', url: 'https://nodejs.org/en/', id: 3 },
        { name: 'Express', url: 'https://expressjs.com/', id: 4 },
        { name: 'Docker', url: 'https://www.docker.com/', id: 5 },
        { name: 'MongoDB', url: 'https://www.mongodb.com/', id: 6 },
        { name: 'SQL', url: 'https://en.wikipedia.org/wiki/SQL', id: 7 },
        { name: 'Full Stack Development', url: '', id: 8 },
        { name: 'DOMO', url: 'https://www.domo.com/', id: 9 },
        { name: 'Data Analytics', url: '', id: 10 },
        { name: 'Big Data', url: '', id: 11 },
        { name: 'Spark', url: '', id: 12 },
        { name: 'Hadoop', url: '', id: 13 },
        { name: 'RESTAPI', url: '', id: 14 },
        { name: 'Microservices', url: '', id: 15 },
        { name: 'Java', url: '', id: 16 },
        { name: 'RedHat', url: '', id: 17 },
        { name: 'MEAN & MERN', url: '', id: 18 },
    ];
    function renderList() {
        return skills.map((skill) => {
            return (
                <li className={classes.list} key={skill.id}>
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