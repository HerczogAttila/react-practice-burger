import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-order';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    adress: {
      street: '',
      postalCode: ''
    },
    loading: false
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Max',
        adress: {
          street: 'Teststreet 1',
          zipCode: '41351',
          country: 'Hungary'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    };
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false});
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading: false});
      });
    console.log(this.props.ingredients);
  };

  render() {
    let form = (
      <form action="">
        <input className={classes.Input} type="text" name="name" placeholder="Your name"/>
        <input className={classes.Input} type="text" name="email" placeholder="Your email"/>
        <input className={classes.Input} type="text" name="street" placeholder="Street"/>
        <input className={classes.Input} type="text" name="postal" placeholder="Postal Code"/>
        <Button buttonType="Success" clicked={this.orderHandler}>Order</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner/>
    }

    return (
      <div className={classes.ContactData}>
        <h1>Enter your Contact Data</h1>
        {form}
      </div>
    );
  }
}

export default ContactData;
