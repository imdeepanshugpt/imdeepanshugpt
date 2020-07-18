import React from 'react';
import './footer.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: "center",
        background: "linear-gradient(45deg, #a2a2ec, #e4b17f)",
        color: 'black',
    },
    heart: {
        color: "red",
    },
    copyright: {
        margin: 'auto',
        padding: '20px',
    }
}));

const Footer = () => {
    const classes = useStyles();
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <footer className={classes.root}>
            <Grid container>
                <Grid item xs={8} className={classes.copyright}>
                    <span>&copy; 2020 Deepanshu Gupta ALL RIGHTS RESERVED.</span>
                    <span style={{ margin: "5px", borderLeft: '1px solid #7e35a0' }}>
                        &nbsp;&nbsp;Developed with
                        <span>
                            <FontAwesomeIcon icon={faHeart} className={classes.heart} />
                        </span>
                        &nbsp;by Deepanshu Gupta
                    </span>
                </Grid>
                <Button style={{ float: 'right' }} aria-label="delete" onClick={topFunction}>
                    <ArrowUpwardIcon /> Top
                </Button>
            </Grid>
        </footer>
    )
}

export default Footer;