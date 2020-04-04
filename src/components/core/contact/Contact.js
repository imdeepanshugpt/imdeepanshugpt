import React from 'react';
import TextField from '@material-ui/core/TextField';
import style from './contact.module.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Icon from '@material-ui/core/Icon';
import emailjs from 'emailjs-com';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    const template_params = {
      "sender_name": e.target[0].value,
      "sender_email": e.target[2].value,
      "message": e.target[4].value
    };
    const service_id = "default_service";
    const template_id = "email_template_for_personal_website";
    emailjs.send(service_id, template_id, template_params, 'user_nLWieMD9Vqz3v04LzGtcK')
      .then((result) => {
        console.log(result.text);
        document.getElementById("form").reset();
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className={style.contact} id="contact">
      <h1>Message me</h1>
      <form
        id="form"
        onSubmit={(event) => sendEmail(event)}
        noValidate
        autoComplete="off"
        className={style.form}>
        <Grid container spacing={2} alignContent="center">
          <Grid item xs={6}>
            <TextField
              autoComplete="fname"
              name="name"
              variant="outlined"
              required
              fullWidth
              id="fullName"
              label="Full Name"
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
              name="message"
              required
              className={style.area}
              aria-label="text-area"
              rowsMin={10}
              placeholder="Message" />
          </Grid>
        </Grid>
        <Button
          type="submit"
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