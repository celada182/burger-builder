const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Address = new Schema({
  street: {type: String},
  country: {type: String}
}, {_id: false});

const Customer = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  address: {type: Address}
}, {_id: false});

const Ingredients = new Schema({
  salad: {type: Number},
  bacon: {type: Number},
  cheese: {type: Number},
  meat: {type: Number}
}, {_id: false});

const Order = new Schema({
  ingredients: {type: Ingredients, required: true},
  price: {type: Number, required: true},
  customer: {type: Customer, required: true},
  deliveryMethod: {type: String},
  modification: {type: Date}
});

// Export the model
module.exports = mongoose.model('Order', Order);