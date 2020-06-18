import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends Component {
  state = {
    ingredient: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 1,
    },
  };
  render() {
    return (
      <React.Fragment>
        <Burger ingredient={this.state.ingredient} />
        <div>Build Controls</div>
      </React.Fragment>
    );
  }
}
export default BurgerBuilder;
