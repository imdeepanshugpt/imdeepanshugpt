import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import style from './contact.module.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Icon from '@material-ui/core/Icon';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [message, setMessage] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    let errorFound = false;

    if (e.target[0].value === "") {
      setName(true);
      errorFound = true;
    } else {
      setName(false);
    }
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!(regex.test(e.target[2].value))) {
      errorFound = true;
      setEmail(true);
    } else {
      setEmail(false);
    }

    if (e.target[4].value === "") {
      errorFound = true;
      setMessage(true);
    } else {
      setMessage(false);
    }

    if (!errorFound) {
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
  }

  function setError(type) {
    if (name && type === "name") {
      return <p className={style.error}>Please enter a name</p>;
    } else if (email && type === "email") {
      return <p className={style.error}>Please enter a valid email</p>;
    } else if (message && type === "message") {
      return <p className={style.error}>Please leave a message</p>;
    }
  }
  return (
    <div className={style.contact} id="contact">
      <h1 className={style.message}>Message me</h1>
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
            {setError('name')}
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
            {setError('email')}
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              name="message"
              required
              className={style.area}
              aria-label="text-area"
              rowsMin={10}
              placeholder="Message *" />
            {setError('message')}
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="outlined"
          endIcon={<Icon>send</Icon>}
        >
          Send
      </Button>
      </form>
    </div>
  );
}

export default Contact;