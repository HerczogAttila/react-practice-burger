import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/react-practice-burger/">Burger Builder</NavigationItem>
    {props.isAuthenticated ? <NavigationItem link="/react-practice-burger/orders">Orders</NavigationItem> : null}
    {
      props.isAuthenticated
        ? <NavigationItem link="/react-practice-burger/logout">Logout</NavigationItem>
        : <NavigationItem link="/react-practice-burger/auth">Authenticate</NavigationItem>
    }
  </ul>
);

export default navigationItems;
