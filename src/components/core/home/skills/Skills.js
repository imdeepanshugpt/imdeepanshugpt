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
    { name: 'Data Visualization', url: '', id: 10 },
    { name: 'RESTAPI', url: '', id: 12 },
    { name: 'Microservices', url: '', id: 13 },
    { name: 'Javascript', url: '', id: 14 },
    { name: 'Redhat Linux', url: '', id: 15 },
    { name: 'MEAN & MERN', url: '', id: 16 },
  ];
  function renderList() {
    return skills.map((skill) => {
      return (
        <li className={classes.list} key={skill.id}>
          <a className={classes.link} target="_blank" rel="noopener noreferrer" href={skill.url}>
            {skill.name}
          </a>
        </li>
      );
    });
  }
  return (
    <div>
      <h1>My Skills</h1>
      <div>
        <ul className={classes.ulist}>{renderList()}</ul>
      </div>
    </div>
  );
};

export default Skills;
