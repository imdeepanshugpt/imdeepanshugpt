import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import "./header.module.css";
import history from "../../history";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    width: "100%",
    flexDirection: "column",
    position: "fixed",
    top: "0",
    zIndex: "10",
  },
  header: {
    background: "linear-gradient(45deg, #a2a2ec, #e4b17f)",
    color: "black",
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
    <header className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <div className={classes.title}>
          <Button
            onClick={() => {
              history.push("/");
            }}
          >
            home
          </Button>
          </div>
          <div style={{ float: "right" }}>
            <Button href="https://blog.deepanshugupta.info">blog</Button>
            <Button
              onClick={() => {
                history.push("/projects");
              }}
            >
              Experience & Projects
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
