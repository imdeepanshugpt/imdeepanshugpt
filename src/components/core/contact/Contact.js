import React from 'react';
import TextField from '@material-ui/core/TextField';
import style from './contact.module.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Icon from '@material-ui/core/Icon';

const Contact = () => {
  return (
    <div className={style.contact} id="contact">
      <h1>Message me</h1>
      <form noValidate autoComplete="off" className={style.form}>
        <Grid container spacing={2} alignContent="center">
          <Grid item xs={3}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize 
            required
            className={style.area} 
            aria-label="text-area" 
            rowsMin={10} 
            placeholder="Message" />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          endIcon={<Icon>send</Icon>}
        >
          Send
      </Button>
      </form>
    </div>
  );
}

export default Contact;