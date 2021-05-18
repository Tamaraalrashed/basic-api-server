'use strict';

const express=require('express');
const Clothes=require('../models/clothes.js');
const clothes= new Clothes;
const router=express.Router();


router.get('/',getClothes);
router.get('/:id',getOneClothes);
router.post('/',createClothes);
router.put('/:id',updateClothes);
router.delete('/:id',deleteClothes);


function deleteClothes(req,res){
  const clothesData=clothes.delete(req.params.id);
  res.json(clothesData);
}


function updateClothes(req,res){
  const clothesReq=req.body;
  const clothesData=clothes.update(req.params.id,clothesReq);
  res.json(clothesData);
}

function createClothes(req,res){
  const clothesReq=req.body;
  const clothesData=clothes.create(clothesReq);
  res.status(201).json(clothesData);
}

function getOneClothes(req,res){
  const clothesData=clothes.read(req.params.id);
  res.json(clothesData);
}

function getClothes(req,res){
  const clothesData=clothes.read();
  res.json(clothesData);
}





module.exports = router;