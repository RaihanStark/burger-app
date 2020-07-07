import React from "react";

import burgerLogo from "../../assets/images/logo.png";
import classes from "./Logo.module.css";
const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="myBurger" />
    </div>
  );
};

export default Logo;
