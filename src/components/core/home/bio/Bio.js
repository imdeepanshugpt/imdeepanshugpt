import React from 'react';
import classes from './bio.module.css';
import Social from '../../social/Social';

const Bio = () => {
  const profileImage = require('../../../../assets/imdeepanshugpt.jpg');
  return (
    <div className={classes.bio}>
      <div className={classes.profileAvatar}>
        <img className={classes.img} src={profileImage} alt="ProfileImage" />
      </div>
      <div className={classes.profileDetails}>
        <h1 className={classes.about}> About me </h1>
        <p className={classes.description}>
          Deepanshu Gupta is a web developer who has more than 2 years of experience in the IT
          Industry. He loves to explore the latest technologies and passionate about product
          designing, development, and solving problems with it. He writes blogs and technical
          articles. He loves to collaborate in open source development and believes in building and
          helping the community of engineers.
        </p>
        <p>You should follow him</p>
        <Social />
      </div>
    </div>
  );
};

export default Bio;
