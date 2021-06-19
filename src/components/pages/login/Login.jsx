import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyle } from './Styles';
import { getUserAsync, loginAsync } from '../../../store/slices/auth-slice';
import { validateEmail, validatePassword } from '../../../utils/validation';

export const Login = () => {
  const classes = useStyle();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const dispatch = useDispatch();

  const submit = async (e) => {
    e.preventDefault();

    const emailErrorMsg = validateEmail(email);
    const passwordErrorMsg = validatePassword(password);

    setEmailError(emailErrorMsg);
    setPasswordError(passwordErrorMsg);

    if (!emailErrorMsg && !passwordErrorMsg) {
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
                error={!!emailError}
                helperText={emailError}
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
                error={!!passwordError}
                helperText={passwordError}
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
