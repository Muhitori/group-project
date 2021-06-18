import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

export const Header = () => (
  <header className={s.header}>
    <div className={s.container}>
      <div className={s.headerLogo}>
        <img
          className={s.logo}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCg-AVkxDWa6hSJT7JS_S-4vc2T2F8yKyI_2o04qi602dxnKlN2mDpyOhAQ7oycUX&usqp=CAU"
          alt="logo"
        />
        <NavLink to="/#">GetBooks</NavLink>
      </div>
      <nav>
        <ul className={s.headerNav}>
          <li className={`${s.navItem} ${s.contacts}`}>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink className={s.log} to="/cart">
              Cart
            </NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink className={s.log} to="/logIn">
              Log In
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
