import React from 'react';
import Aux from '../../../hoc/ReactAux';
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const summary = Object.keys(props.ingredients)
      .map(key => {
        return <li key={key}>
          <span
              style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
        </li>
      });
  return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {summary}
        </ul>
        <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button type="Danger" clicked={props.onCancel}>CANCEL</Button>
        <Button type="Success" clicked={props.onConfirm}>CONTINUE</Button>
      </Aux>
  )
};

export default orderSummary;