var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient
var dbURL = "mongodb://127.0.0.1:27017";
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
 
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/insert', function (req, res, next) {
  MongoClient.connect(dbURL, (err, client) => {
    if (err) return console.log(err);
    db = client.db('wedding'); // use crudDB
    db.collection('users').save(req.body, function (err, result) {
      if (err) return console.log(err);
      res.json(result);      
    });
  });
});


router.post('/doLogin', function (req, res, next) {
  
  if(req.body.password=="" || req.body.username==""){
    res.json({succ:false,msg:"user name and password required"});
  }else{
  
  MongoClient.connect(dbURL, (err, client) => {
    if (err) return console.log(err);
    db = client.db('wedding'); // use crudDB
    encryptionString = cryptr.encrypt(req.body.password+"asdf");
    db.collection('users').update({'password':req.body.password,'username':req.body.username},{$set:{token:encryptionString}});  
    db.collection('users').find({'password':req.body.password,'username':req.body.username}).toArray(function (err, result) {
      if (err) return console.log(err);
      console.log(result);
      if(result.length>0){
        res.json({succ:true,msg:'login successfully',f_name:result[0].f_name,l_name:result[0].l_name,token:encryptionString});
      }else{
        res.json({succ:false,msg:'Error while login'});
      }      
    });
  });}
});

router.post('/psave', function (req, res, next) {

  let product_img = req.files.pic;
  url = "profile_images/file"+Math.random(0,999)+req.files.pro.name;

  product_img.mv("public/"+url, function(err) {
    if (err)
      return res.status(500).send(err);

      MongoClient.connect(dbURL, (err, client) => {
        if (err) return console.log(err);
        db = client.db('wedding'); // use crudDB

        var insertdata = {
          product_name:req.body.product_name,
          product_url: url,
          product_cat:req.body.product_cat,
          product_price:req.body.product_price
        }

        console.log(insertdata);  
        db.collection('users').save(insertdata, function (err, result) {
          if (err) return console.log(err);
          res.end("/?insertSuccess=1");
        });
      });
  });
  console.log("save  ",req.body);
});
module.exports = router;
