//__________________________ Import or Require Module ___________________________________________

const express=require('express')

const ShoppingList=require('../Controllers/ShoppingList')
const router=express.Router()

//__________________________ get api : for Test ___________________________________________

router.get("/test",(req,res)=>{
    return res.send({status:true,message:"bonous "});
})

//__________________________ post api : Create Author ___________________________________________
router.post('/create',ShoppingList.frute)

router.put("update/",ShoppingList.update)

router.get("gat/",ShoppingList.gete)

router.put("totalupdaterate/",ShoppingList.totalupdaterare)

module.exports = router;