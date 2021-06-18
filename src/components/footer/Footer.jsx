import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  footer: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    right: 0,
    marginTop: 10,
    paddingTop: 15,
    minHeight: 50,
    backgroundColor: '#cbcbe6',
  },
  container: {
    marginLeft: 50,
    marginRright: 50,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  privacyNavItem: {
    marginRight: 20,
  },
  itemLink: {
    '&:hover': {
      color: 'blue',
    },
  },
  logoLink: {
    marginBottom: 10,
  },
  signNav: {
    display: 'flex',
    listStyleType: 'none',
  },
  signNavItem: {
    marginRight: 20,
    '&:last-child': {
      color: 'blue',
    },
  },
  privacyNav: {
    display: 'flex',
    listStyleType: 'none',
  },
});

export const Footer = () => {
  const classes = useStyle();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
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
        <div className="">
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
              Sing In
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};
