import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button clicked={props.checkoutCancelled} buttonType={"Danger"}>CANCEL</Button>
      <Button clicked={props.checkoutContinued} buttonType={"Success"}>CONTINUE</Button>
    </div>
  );
};

export default checkoutSummary;
