import React from 'react';
import Social from '../social/Social';
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
        background: 'white',
        color: 'black',
        marginLeft: '10%',
        marginRight: '10%'
    },
    heart: {
        color: "red",
    },
    socialmedia: {
        padding: "5px",
    },
    copyright: {
        fontFamily: `'Raleway', sans-serif`,
        padding: '5px',
        borderTop: '1px solid #7e35a0',
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
                <Grid item xs={12} className={classes.socialmedia}>
                    <h1 style={{ margin: '0px' }}>Connect with me</h1>
                    <Social />
                </Grid>
                <Grid item xs={12} className={classes.copyright}>
                    <span>No &copy; copyright issues.</span>
                    <span style={{ margin: "5px", borderLeft: '1px solid #7e35a0' }}>
                        &nbsp;&nbsp;Developed with
                        <span>
                            <FontAwesomeIcon icon={faHeart} className={classes.heart} />
                        </span>
                        &nbsp;by Deepanshu Gupta 
                    </span>
                    <Button style={{ float: 'right' }} aria-label="delete" onClick={topFunction}>
                        <ArrowUpwardIcon /> Top
                    </Button>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;