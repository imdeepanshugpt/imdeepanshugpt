import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import './header.module.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    header: {
        backgroundColor: '#211F1F'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <HomeIcon />
                    </IconButton> */}
                    <Typography variant="h6" className={classes.title}>
                        imdeepanshugpt
                    </Typography>
                    <Button className="btn" color="inherit"
                        href="https://medium.com/@imdeepanshugpt">Blogs</Button>
                    <Button color="inherit">Work with me</Button>
                    <Button color="inherit" href="https://github.com/imdeepanshugpt">What I Do</Button>
                    <Button color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;