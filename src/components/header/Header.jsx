import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  Toolbar,
  Button,
  Typography,
  Container,
  Grid,
} from '@material-ui/core';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import { clearAuthState } from '../../store/slices/auth-slice';
import { tokenSelector } from '../../store/selectors/auth-selector';
import { useStyle } from './Styles';
import { cartProductsIdsSelector } from '../../store/selectors/cart-selector';
import { CartCounter } from '../common/cart-counter/CartCounter';

export const Header = () => {
  const dispatch = useDispatch();
  const classes = useStyle();

  const isLogin = useSelector(tokenSelector);
  const cartProducts = useSelector(cartProductsIdsSelector);
  const cartLength = cartProducts ? cartProducts.length : 0;

  const logout = () => dispatch(clearAuthState());

  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <Toolbar className={classes.toolbar}>
          <Grid item className={classes.toolbarLeft}>
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
          </Grid>
          <Grid item>
            <NavLink color="primary" variant="h6" to="/contacts">
              Contacts
            </NavLink>
            {isLogin && (
              <>
                <NavLink to="/cart">
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    className={classes.toolbarButton}
                  >
                    {!!cartLength && <CartCounter cartLength={cartLength} />}
                    Cart
                  </Button>
                </NavLink>
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
          </Grid>
        </Toolbar>
      </Container>
    </header>
  );
};
