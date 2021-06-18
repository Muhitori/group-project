import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyle } from './Styles';
import { getUserAsync, loginAsync } from '../../../store/slices/auth-slice';

export const Login = () => {
  const classes = useStyle();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');

  const dispatch = useDispatch();

  const validateEmail = (testEmail) => {
    const emailRegExp = /\S+@\S+\.\S+/;
    if (!email) {
      setEmailErrorMsg('Enter email');
      return false;
    }

    if (!emailRegExp.test(testEmail)) {
      setEmailErrorMsg('Wrong email');
      return false;
    }

    setEmailErrorMsg('');
    return true;
  };

  const validatePassword = (testPassword) => {
    if (password.length < 6) {
      setPasswordErrorMsg('To short password');
      return false;
    }

    if (!/^[a-zA-Z0-9]*$/.test(testPassword)) {
      setPasswordErrorMsg('Password contains invalid characters');
      return false;
    }

    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(testPassword)) {
      setPasswordErrorMsg(
        'Password must contain at least one number, uppercase and lowercase letter'
      );
      return false;
    }

    setPasswordErrorMsg('');
    return true;
  };

  const submit = async (e) => {
    e.preventDefault();

    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);

    if (isValidEmail && isValidPassword) {
      const action = await dispatch(loginAsync({ email, password }));

      if (action.payload?.token) {
        dispatch(getUserAsync(action.payload.token));
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography variant="h5">Here you can Login</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          and buy books
        </Typography>
        <form className={classes.form} onSubmit={submit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={!!emailErrorMsg}
                helperText={emailErrorMsg}
                onChange={({ target }) => setEmail(target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={!!passwordErrorMsg}
                helperText={passwordErrorMsg}
                onChange={({ target }) => setPassword(target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
        </form>
      </div>
    </Container>
  );
};
