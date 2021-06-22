import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Toolbar, Button, Typography, Container } from '@material-ui/core';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import { clearAuthState } from '../../store/slices/auth-slice';
import { tokenSelector } from '../../store/selectors/auth-selector';
import { useStyle } from './Styles';

export const Header = () => {
  const classes = useStyle();
  const isLogin = useSelector(tokenSelector);

  const dispatch = useDispatch();

  const logout = () => dispatch(clearAuthState());

  return (
    <header>
      <Container className={classes.container}>
        <Toolbar className={classes.toolbar}>
          <NavLink to="/books">
            <LocalLibraryIcon color="primary" fontSize="large" />
          </NavLink>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            className={classes.toolbarTitle}
          >
            Books
          </Typography>
          <NavLink color="primary" variant="h6" to="/contacts">
            Contacts
          </NavLink>
          {isLogin && (
            <>
              <Button
                variant="contained"
                size="small"
                color="primary"
                className={classes.toolbarButton}
              >
                Cart
              </Button>
              <Button
                variant="contained"
                size="small"
                className={classes.toolbarButton}
                onClick={logout}
              >
                Log out
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </header>
  );
};
