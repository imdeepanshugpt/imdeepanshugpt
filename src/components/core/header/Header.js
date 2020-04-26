  
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './header.module.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        width: '100%',
        flexDirection: 'column'
    },
    header: {
        backgroundColor: '#211F1F'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontFamily: `'Dancing Script', cursive`,
        fontSize:'30px'
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Deepanshu Gupta
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;