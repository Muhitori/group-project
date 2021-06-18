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
      <div>
        <a href="/main">GetBooks</a>
        <p>2019-2020 GetBooks,inc</p>
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
