import React from 'react';
import Button from "../../../components/UI/Button/Button";
import classes from './ContactData.css';

class ContactData extends React.Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  };

  render() {
    return (
        <div className={classes.ContactData}>
          <h4>Contact Data</h4>
          <form>
            <input className={classes.Input} type="text" name="name"/>
            <input className={classes.Input} type="email" name="email"/>
            <input className={classes.Input} type="text" name="street"/>
            <input className={classes.Input} type="text" name="postalCode"/>
            <Button btnType="Success">ORDER</Button>
          </form>
        </div>
    );
  }
}

export default ContactData;