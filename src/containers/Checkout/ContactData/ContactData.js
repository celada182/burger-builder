import React from 'react';
import Button from "../../../components/UI/Button/Button";
import classes from './ContactData.css';
import axios from '../../../axios'
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends React.Component {
  state = {
    orderForm: [
      {
        id: 'name',
        type: 'input',
        placeholder: 'Name',
        value: ''
      },
      {
        id: 'street',
        type: 'input',
        placeholder: 'Street',
        value: ''
      },
      {
        id: 'zipCode',
        type: 'input',
        placeholder: 'ZIP Code',
        value: ''
      },
      {
        id: 'country',
        type: 'input',
        placeholder: 'Country',
        value: ''
      },
      {
        id: 'email',
        type: 'email',
        placeholder: 'your-email@example.com',
        value: ''
      },
      {
        id: 'delivery',
        type: 'select',
        options: [
          {value: 'fastest', display: 'Fastest'},
          {value: 'cheapest', display: 'Cheapest'}
        ],
        value: ''
      }
    ],
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
          {this.state.orderForm.map(element => (
              <Input key={element.id} name={element.id} type={element.type}
                     placeholder={element.placeholder} value={element.value}
              options={element.options}/>
          ))}
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