import React, {Component} from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };

  componentDidMount() {
    axios.get('/orders.json')
      .then(response => {
        const featchOrders = [];
        for (let key in response.data) {
          featchOrders.push({...response.data[key], id: key});
        }
        this.setState({loading: false, orders: featchOrders});
      })
      .catch(error => {
        this.setState({loading: false});
      });
  }

  render () {
    return (
      <div>
        <Order />
        <Order />
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
