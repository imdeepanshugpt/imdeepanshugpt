import React from 'react';
import Card from '@material-ui/core/Card';
import styles from './project.module.css';

const Projects = () => {
    const PG = require('../../assets/PandG.jpg');
    const FT = require('../../assets/FT.jpg');
    const airline = require('../../assets/airline.jpg');
    const utube = require('../../assets/UTube.jpg');
    const microservices = require('../../assets/MicroServices.jpg');
    const giftcard = require('../../assets/giftcard.jpg');

    return (
        <div>
            <h1>Industrial Projects</h1>
            <div className={styles.indProjects}>
                <Card className={styles.card}>
                    <img className={styles.img} src={PG} alt="P&G"></img>
                </Card>
                <Card className={styles.card}>
                    <img className={styles.img} src={FT} alt="FT"></img>
                </Card>
            </div>
            <h1>Personal Projects</h1>
            <div className={styles.indProjects}>
                <Card className={styles.card}>
                    <img className={styles.img} src={airline} alt="P&G"></img>
                </Card>
                <Card className={styles.card}>
                    <img className={styles.img} src={utube} alt="FT"></img>
                </Card>
                <Card className={styles.card}>
                    <img className={styles.img} src={microservices} alt="P&G"></img>
                </Card>
                <Card className={styles.card}>
                    <img className={styles.img} src={giftcard} alt="FT"></img>
                </Card>
            </div>

        </div>
    )
}

export default Projects;