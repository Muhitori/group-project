import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { clearAuthState } from '../../store/slices/auth-slice';
import { useStyle } from './Styles';

export const Footer = () => {
  const classes = useStyle();
  const dispatch = useDispatch();

  const logout = () => dispatch(clearAuthState());

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
            <NavLink className={classes.itemLink} to="/#" onClick={logout}>
              Log out
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};
