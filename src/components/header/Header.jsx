import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import s from './Header.module.css';

const useStyle = makeStyles({
  header: {
    marginTop: 10,
    minHeight: 50,
    backgroundColor: '#cbcbe6',
  },
  container: {
    marginLeft: 50,
    marginRight: 50,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerNav: {
    display: 'flex',
  },
  headerLogo: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginRight: 20,
  },
  navItem: {
    marginRight: 30,
    minWidth: 50,
    listStyleType: 'none',
    '&:last-child': {
      marginRight: 0,
    },
  },
  log: {
    padding: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 3,
    '&:hover': {
      backgroundColor: 'rgb(50, 50, 112)',
      color: 'white',
    },
  },
});

export const Header = () => {
  const classes = useStyle();
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.headerLogo}>
          <img
            className={s.logo}
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
