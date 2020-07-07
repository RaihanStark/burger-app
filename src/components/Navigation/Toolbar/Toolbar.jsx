import React from "react";
import classes from "./Toolbar.module.css";

import Logo from "../../Logo/Logo";
import DrawerToggler from "./DrawerToggler/DrawerToggler";

import NavigationItems from "../NavigationItems/NavigationItems";
const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggler clicked={props.opened} />

      <div className={classes.Logo}>
        <Logo />
      </div>

      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
