const mongoose = require('mongoose');

var categories = [
  'Promo',
  'Tiket',
  'Perawatan & Kecantikan',
  'Kesehatan',
  'Fashion',
  'Handphone',
  'Komputer',
  'Elektronik',
  'Kamera',
  'Hobi & Koleksi',
  'Olahraga',
  'Perlengkapan Bayi',
  'Rumah Tangga'
]

var itemSchema = mongoose.Schema({
  name:{
    type:String,
    required:[true,'product name is required, must not empty']
  },
  description:{
    type:String,
    maxlength:[200,'Your description exceeds the maximum allowed length of 200']
  },
  price:{
    type:Number,
    required:[true,'price is required, must not empty']
  },
  category:{
    type:String,
    required:[true,'category is required, must not empty'],
    enum:{
      values:categories,
      message:'Category doesn\'t exist'
    }
  },
  stock:{
    type:Number,
    required:[true,'stock is required, must not empty']
  },
  image_url:{
    type:String
  }
});

var Item = mongoose.model('Item',itemSchema)

module.exports = Item;