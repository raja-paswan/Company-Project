//______________________ Import or Require Modules ________________________________

const mongoose = require('mongoose')

//____________________________ Creating Schema _____________________________________
const ShoppingListSchema = new mongoose.Schema({
  fruit: {
    type: String,
    required: true,
    enum: ['Apples', 'Bananas', 'Oranges', 'Grapes', 'Mangoes']
  },
  weight: {
    type: Number,
    required: true
  },
  rate: {
    type: Number,
    required: true
  },
  finalPrice: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true,
    enum: ['INR', 'USD']
  }
});

// get



//__________________________ Exporting Author Schema ___________________________________________

module.exports = mongoose.model('ShoppingList', ShoppingListSchema);