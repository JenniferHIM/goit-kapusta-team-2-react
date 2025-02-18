import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Nav/Nav';
import UserMenu from '../UserMenu/UserMenu';
import s from "../AppBar/AppBar.module.scss";

import { authSelectors } from '../../redux/auth';


export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <div className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : null}
    </div>
  );
}
