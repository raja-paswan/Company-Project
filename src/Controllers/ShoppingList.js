//______________________ Import or Require Modules ________________________________


const ShoppingListSchema = require("../Models/ShoppingListSchema");

//______________________ post api : Create ________________________________
var frute=async function(req,res){
  try {
  const data=req.body
 
  var savedData = await ShoppingListSchema.create(data);
  res.status(201).send({ status:true,data: savedData });
} catch (err) {
  return res.status(500).send({ status: false, err: err.message });
}
}
// *update
const update= async function (req, res)  {
  try {
    const itemId = req.params.id;
    const updatedFruit = req.body.fruit;
    const updatedRate = req.body.rate;
    const updatedCurrency = req.body.currency;

    const result = await ShoppingList.findByIdAndUpdate(itemId, {
      fruit: updatedFruit,
      rate: updatedRate,
      currency: updatedCurrency
    }, { new: true });

    res.send(result);
  } catch (error) {
    res.status(500).send({ error: 'Failed to update shopping list item' });
  }
};
 //get
 const gete=async (req, res) => {
  try {
    const itemId = req.params.id;

    const result = await ShoppingList.findById(itemId);

    res.send(result);
  } catch (error) {
    res.status(500).send({ error: 'Failed to retrieve shopping list item' });
  }
};

//total 
let totalupdaterare=async function(req,res){
  try {
    const shoppingListItem = new ShoppingList({
      fruit: req.body.fruit,
      weight: req.body.weight,
      rate: req.body.rate,
      currency: req.body.currency
    });
    
    await shoppingListItem.save();
    res.status(201).json({ message: 'Item added to shopping list successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


//______________________ Export the Modules ________________________________

module.exports = { frute,update,gete,totalupdaterare };
