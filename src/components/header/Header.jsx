import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStyle } from './Styles';

export const Header = () => {
  const classes = useStyle();
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.headerLogo}>
          <img
            className={classes.logo}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCg-AVkxDWa6hSJT7JS_S-4vc2T2F8yKyI_2o04qi602dxnKlN2mDpyOhAQ7oycUX&usqp=CAU"
            alt="logo"
          />
          <NavLink to="/#">GetBooks</NavLink>
        </div>
        <nav>
          <ul className={classes.headerNav}>
            <li className={`${classes.navItem} ${classes.contacts}`}>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
            <li className={classes.navItem}>
              <NavLink className={classes.log} to="/cart">
                Cart
              </NavLink>
            </li>
            <li className={classes.navItem}>
              <NavLink className={classes.log} to="/logIn">
                Log In
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
