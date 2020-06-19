import React from "react";

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
      <p>Continue to Checkout?</p>
    </React.Fragment>
  );
};

export default OrderSummary;
