'use strict';
'use strict';

const express=require('express');
const Food=require('../models/food.js');
const food= new Food;
const router=express.Router();


router.get('/',getFood);
router.get('/:id',getOneFood);
router.post('/',createFood);
router.put('/:id',updateFood);
router.delete('/:id',deleteFood);


function deleteFood(req,res){
  const foodData=food.delete(req.params.id);
  res.json(foodData);
}


function updateFood(req,res){
  const foodReq=req.body;
  const foodData=food.update(req.params.id,foodReq);
  res.json(foodData);
}

function createFood(req,res){
  const foodReq=req.body;
  const foodData=food.create(foodReq);
  res.status(201).json(foodData);
}

function getOneFood(req,res){
  const foodData=food.read(req.params.id);
  res.json(foodData);
}

function getFood(req,res){
  const foodData=food.read();
  res.json(foodData);
}





module.exports = router;