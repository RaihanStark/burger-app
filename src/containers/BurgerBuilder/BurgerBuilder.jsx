import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
const INGREDIENT_PRICE = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.3,
  meat: 0.9,
};
class BurgerBuilder extends Component {
  state = {
    ingredient: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    total_price: 4,
    purchaseable: false,
    purchasing: false,
  };

  updatePurchasable(ingredient) {
    let sum = Object.keys(ingredient)
      .map((igKey) => {
        return ingredient[igKey];
      })
      .reduce((prev, el) => {
        return prev + el;
      }, 0);

    this.setState({ purchaseable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    // Add ingredient
    const newIngredientSum = this.state.ingredient[type] + 1;
    let updatedIngredient = { ...this.state.ingredient };
    console.log(updatedIngredient);
    updatedIngredient[type] = newIngredientSum;

    // Add total Price
    const newPriceAddition = this.state.total_price + INGREDIENT_PRICE[type];

    // Set State
    this.setState({
      total_price: newPriceAddition,
      ingredient: updatedIngredient,
    });
    this.updatePurchasable(updatedIngredient);
  };

  DeductIngredientHandler = (type) => {
    // deduct ingredient
    const ingredientOld = this.state.ingredient[type];

    if (ingredientOld <= 0) {
      return;
    }

    const newIngredientSum = ingredientOld - 1;
    let updatedIngredient = { ...this.state.ingredient };
    updatedIngredient[type] = newIngredientSum;

    // deduct total Price
    const newPriceDeduction = this.state.total_price - INGREDIENT_PRICE[type];

    // Set State
    this.setState({
      total_price: newPriceDeduction,
      ingredient: updatedIngredient,
    });
    this.updatePurchasable(updatedIngredient);
  };

  updatePurchasing = () => {
    this.setState({ purchasing: true });
  };

  cancelPurchaseHandler = () => {
    this.setState({ purchasing: false });
  };

  continuePurchaseHandler = () => {
    alert("You continue...");
  };

  render() {
    const disabled_info = {
      ...this.state.ingredient,
    };

    for (const key in disabled_info) {
      disabled_info[key] = disabled_info[key] <= 0;
    }
    return (
      <React.Fragment>
        <Modal show={this.state.purchasing} cancel={this.cancelPurchaseHandler}>
          <OrderSummary
            ingredients={this.state.ingredient}
            cancelPurchase={this.cancelPurchaseHandler}
            continuePurchase={this.continuePurchaseHandler}
            price={this.state.total_price}
          />
        </Modal>
        <Burger ingredient={this.state.ingredient} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientDeduct={this.DeductIngredientHandler}
          disabledInfo={disabled_info}
          price={this.state.total_price}
          purchaseable={this.state.purchaseable}
          purchasing={this.updatePurchasing}
        ></BuildControls>
      </React.Fragment>
    );
  }
}
export default BurgerBuilder;
