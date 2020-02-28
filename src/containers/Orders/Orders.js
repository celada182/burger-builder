import React from 'react';
import Order from "../../components/Order/Order";
import axios from '../../axios';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends React.Component {

  state = {
    orders: [],
    loading: true
  };

  componentDidMount() {
    axios.get('/orders')
    .then(resp => {
      this.setState({loading: false});
      this.setState({orders: resp.data});
    })
    .catch(error => {
      this.setState({loading: false});
    });
  }

  render() {
    return (
        <div>
          {this.state.orders.map(order => <Order key={order._id}
                                                 ingredients={order.ingredients}
                                                 price={order.price}/>)}
        </div>
    );
  }
}

export default withErrorHandler(Orders, axios);