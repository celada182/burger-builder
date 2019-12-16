const Order = require('../models/order');

exports.create = function (req, res) {
  const order = new Order(
      {
        ingredients: req.body.ingredients,
        price: req.body.price,
        customer: req.body.customer,
        deliveryMethod: req.body.deliveryMethod,
        modification: new Date()
      }
  );

  order.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Order Created successfully')
  })
};

exports.read = function (req, res) {
  Order.find(function (err, product) {
    if (err) {
      return next(err);
    }
    res.send(product);
  })
};

exports.readOne = function (req, res) {
  Order.findById(req.params.id, function (err, product) {
    if (err) {
      return next(err);
    }
    res.send(product);
  })
};

exports.update = function (req, res) {
  req.body.modification = new Date();
  Order.findByIdAndUpdate(req.params.id, {$set: req.body},
      function (err, order) {
        if (err) {
          return next(err);
        }
        res.send('Order udpated.');
      });
};

exports.delete = function (req, res) {
  Order.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      return next(err);
    }
    res.send('Deleted successfully!');
  })
};