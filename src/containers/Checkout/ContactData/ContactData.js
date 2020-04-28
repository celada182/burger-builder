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
        value: 'fastest'
      }
    ],
    loading: false
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const formData = {};
    this.state.orderForm.forEach(
        element => formData[element.id] = element.value);
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      formData: formData
    };
    console.log(this.state.orderForm);
    console.log(order);
    this.setState({loading: false})
    /*axios.post('orders', order)
    .then(response => {
      this.setState({loading: false});
      this.props.history.push('/');
    })
    .then(error => this.setState({loading: false}))*/
  };

  inputChangedHandler = (event, index) => {
    const updatedForm = [...this.state.orderForm];
    const updatedElement = {...updatedForm[index]};
    updatedElement.value = event.target.value;
    updatedForm[index] = updatedElement;
    this.setState({orderForm: updatedForm});
  };

  render() {
    let form = (
        <form onSubmit={this.orderHandler}>
          {this.state.orderForm.map((element, index) => (
              <Input key={element.id}
                     name={element.id}
                     type={element.type}
                     placeholder={element.placeholder}
                     value={element.value}
                     options={element.options}
                     changed={(event) =>
                         this.inputChangedHandler(event, index)}/>
          ))}
          <Button btnType="Success">ORDER</Button>
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