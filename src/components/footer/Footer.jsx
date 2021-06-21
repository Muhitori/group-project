import React from 'react';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';
import { useStyle } from './Styles';

export const Footer = () => {
  const classes = useStyle();

  return (
    <footer className={classes.footer}>
      <Container className={classes.container}>
        <ul className={classes.privacyNav}>
          <li className={classes.privacyNavItem}>
            <NavLink className={classes.itemLink} to="/#">
              Privacy
            </NavLink>
          </li>
          <li className={classes.privacyNavItem}>
            <NavLink className={classes.itemLink} to="/#">
              Terms
            </NavLink>
          </li>
        </ul>
        <div className={classes.footerCenter}>
          <NavLink className={classes.logoLink} to="/#">
            GetBooks, inc
          </NavLink>
          <p>2019-2021</p>
        </div>
        <ul className={classes.signNav}>
          <li className={classes.signNavItem}>
            <NavLink className={classes.itemLink} to="/#">
              Support
            </NavLink>
          </li>
          <li className={classes.signNavItem}>
            <NavLink className={classes.itemLink} to="/#">
              Sing Up
            </NavLink>
          </li>
          <li className={classes.signNavItem}>
            <NavLink className={classes.itemLink} to="/#">
              Sign In
            </NavLink>
          </li>
        </ul>
      </Container>
    </footer>
  );
};
