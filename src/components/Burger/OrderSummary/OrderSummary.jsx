import React from "react";
import Button from "../../UI/Button/Button";
const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <p>
          <span style={{ textTransform: "capitalize" }}>
            {igKey}: {props.ingredients[igKey]}
          </span>
        </p>
      </li>
    );
  });
  console.log(ingredientSummary);
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>

      <Button btnType="Danger" clicked={props.cancelPurchase}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.continuePurchase}>
        Continue
      </Button>
    </React.Fragment>
  );
};

export default OrderSummary;
