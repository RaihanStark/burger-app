import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from "./SideDrawer.module.css";
function SideDrawer(props) {
  return (
    <React.Fragment>
      <Backdrop show={props.isOpen} clicked={props.closed} />
      <div
        className={[
          classes.SideDrawer,
          props.isOpen ? classes.Open : classes.Close,
        ].join(" ")}
      >
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
}

export default SideDrawer;
