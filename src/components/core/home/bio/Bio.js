import React from 'react';
import classes from './bio.module.css';

const Bio = () => {
    const profileImage = require('../../../../assets/imdeepanshugpt.jpg');
    return (
        <div className={classes.bio} >
            <div className={classes.profileAvatar} >
                <img src={profileImage} alt="ProfileImage" />
            </div>
            <div className={classes.profileDetails} >
                <h1 className={classes.about}> About me </h1>
                <p className={classes.description}>Hi, I am Deepanshu Gupta. I am a computer science engineer who is very dedicated towards his work and passionate about the latest technologies in the market. I always look forward to creating something innovative and that can be used to apply in the real world. I enjoy being challenged, working on projects that require me to work outside my
                comfort and knowledge set, as continuing to learn new languages, and development techniques are important to me.</p>
            </div>
        </div>
    );
}

export default Bio;