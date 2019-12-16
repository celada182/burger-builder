const Ingredient = require('../models/indredient');

exports.readOne = function (req, res) {
  Ingredient.findOne({}, { '_id': 0}, function (err, product) {
    if (err) {
      return next(err);
    }
    res.send(product);
  })
};