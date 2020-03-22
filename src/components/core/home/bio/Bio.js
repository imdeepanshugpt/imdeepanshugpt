import React from 'react';
import classes from './bio.module.css';

const Bio = () => {
    const profileImage = require('../../../../assets/imdeepanshugpt.jpg');
    return (
        <div className={classes.bio} >
            <div className="profile-avatar" >
                <img src={profileImage} alt="ProfileImage" />
            </div>
            <div className={classes.profileDetails} >
                <h1> Deepanshu Gupta </h1>
                <span>Software Developer | Computer Science Engineer</span>
            </div>
        </div>
    );
}

export default Bio;