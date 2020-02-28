import React from 'react';
import Button from "../../../components/UI/Button/Button";
import classes from './ContactData.css';
import axios from '../../../axios'
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends React.Component {
  state = {
    name: '',
    email: '',
    address: {
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
        name: 'Celada',
        address: {
          street: 'qwreiuyiyti',
          country: 'España'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    };
    axios.post('orders', order)
    .then(response => {
      this.setState({loading: false});
      this.props.history.push('/');
    })
    .then(error => this.setState({loading: false}))
  };

  render() {
    let form = (
        <form>
          <input className={classes.Input} type="text" name="name"/>
          <input className={classes.Input} type="email" name="email"/>
          <input className={classes.Input} type="text" name="street"/>
          <input className={classes.Input} type="text" name="postalCode"/>
          <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
    );
    if (this.state.loading) {
      form = <Spinner/>
    }
    return (
        <div className={classes.ContactData}>
          <h4>Contact Data</h4>
          {form}
        </div>
    );
  }
}

export default ContactData;