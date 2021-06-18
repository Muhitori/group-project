import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Footer.module.css';

export const Footer = () => (
  <footer className={s.footer}>
    <div className={s.container}>
      <ul className={s.privacyNav}>
        <li className={s.privacyNavItem}>
          <NavLink className={s.itemLink} to="/#">
            Privacy
          </NavLink>
        </li>
        <li className={s.privacyNavItem}>
          <NavLink className={s.itemLink} to="/#">
            Terms
          </NavLink>
        </li>
      </ul>
      <div className="">
        <NavLink className={s.logoLink} to="/#">
          GetBooks, inc
        </NavLink>
        <p>2019-2021</p>
      </div>
      <ul className={s.signNav}>
        <li className={s.signNavItem}>
          <NavLink className={s.itemLink} to="/#">
            Support
          </NavLink>
        </li>
        <li className={s.signNavItem}>
          <NavLink className={s.itemLink} to="/#">
            Sing Up
          </NavLink>
        </li>
        <li className={s.signNavItem}>
          <NavLink className={s.itemLink} to="/#">
            Sing In
          </NavLink>
        </li>
      </ul>
    </div>
  </footer>
);
