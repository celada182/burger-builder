import React from 'react';
import Button from "../../../components/UI/Button/Button";
import classes from './ContactData.css';
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends React.Component {
  state = {
    orderForm: [
      {
        id: 'name',
        type: 'input',
        placeholder: 'Name',
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      {
        id: 'street',
        type: 'input',
        placeholder: 'Street',
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      {
        id: 'zipCode',
        type: 'input',
        placeholder: 'ZIP Code',
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5
        },
        valid: false,
        touched: false
      },
      {
        id: 'country',
        type: 'input',
        placeholder: 'Country',
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      {
        id: 'email',
        type: 'email',
        placeholder: 'your-email@example.com',
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
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

  validity(value, rules) {
    if (rules.required && value.trim() === '') {
      return false;
    }
    if (rules.minLength && value.length < rules.minLength) {
      return false;
    }
    if (rules.maxLength && value.length > rules.maxLength) {
      return false;
    }
    return true;
  };

  inputChangedHandler = (event, index) => {
    const updatedForm = [...this.state.orderForm];
    const updatedElement = {...updatedForm[index]};
    updatedElement.touched = true;
    updatedElement.value = event.target.value;
    updatedElement.valid = this.validity(updatedElement.value,
        updatedElement.validation);
    console.log(updatedElement.valid);
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
                     valid={element.valid}
                     touched={element.touched}
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