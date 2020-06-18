import React from "react";
import classes from "./Layout.module.css";

const Layout = (props) => (
  <React.Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </React.Fragment>
);

export default Layout;
