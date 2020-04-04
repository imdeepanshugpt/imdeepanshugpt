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
                <h1 className={classes.about}> About me </h1>
                <p>Hi, I am Deepanshu Gupta, I am computer science engineer, currently working as full stack javascript developer</p>
            </div>
        </div>
    );
}

export default Bio;