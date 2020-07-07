import React, { Component } from "react";
import classes from "./Layout.module.css";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  SideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <React.Fragment>
        <Toolbar opened={this.SideDrawerToggleHandler} />
        <SideDrawer
          isOpen={this.state.showSideDrawer}
          closed={this.SideDrawerToggleHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}
export default Layout;
