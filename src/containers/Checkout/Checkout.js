import React, {Component} from 'react';
import CheckoutSummary
  from "../../components/Order/CheckoutSummary/CheckoutSummary";
import {Route} from "react-router-dom";
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component {

  state = {
    ingredients: null,
    price: null
  };

  render() {
    return (
        <div>
          <CheckoutSummary ingredients={this.state.ingredients}
                           onCancel={this.checkoutCancel}
                           onContinue={this.checkoutContinue}/>
          <Route path={this.props.match.path + '/contact'}
                 render={(props) => (
                     <ContactData ingredients={this.state.ingredients}
                                  price={this.state.price}
                                  {...props}/>)}/>
        </div>
    );
  }

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price;
    for (let entry of query.entries()) {
      if (entry[0] === 'price') {
        price = entry[1];
      } else {
        ingredients[entry[0]] = +entry[1];
      }
    }
    this.setState({ingredients: ingredients, price: price});
  }

  checkoutCancel = () => {
    this.props.history.goBack();
  };

  checkoutContinue = () => {
    this.props.history.replace('/checkout/contact');
  };
}

export default Checkout;