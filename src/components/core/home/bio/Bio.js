import React from 'react';
import classes from './bio.module.css';

const Bio = () => {
    const profileImage = require('../../../../assets/imdeepanshugpt.jpg');
    return (
        <div className={classes.bio} >
            <div className={classes.profileAvatar} >
                <img className={classes.img} src={profileImage} alt="ProfileImage" />
            </div>
            <div className={classes.profileDetails} >
                <h1 className={classes.about}> About me </h1>
                <p className={classes.description}>
                    Deepanshu Gupta is a computer science engineer who is very dedicated to his work and passion for the latest technologies in the market. He always tries to apply innovative ideas to build and design the product and that can be used to apply in the real world.
                    <br />
                    He has around 2 years of industry experience in BFSI and RCM Domain worked on complex projects of the IT industry. He is currently working in Bengaluru as a full stack javascript developer.
                </p>
            </div>
        </div>
    );
}

export default Bio;