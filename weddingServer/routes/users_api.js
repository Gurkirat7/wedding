var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient
var dbURL = "mongodb://127.0.0.1:27017";
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
 
/* GET users listing. */
router.get('/get', function (req, res, next) {
  // console.log(req.session.views);
  if(req.session.views){
    console.log("page view ",req.session.views++);
  }else{
    req.session.views = 1;
  }
  MongoClient.connect(dbURL, (err, client) => {
    if (err) return console.log(err)
    db = client.db('wedding'); // use crudDB
    db.collection('users').find().toArray(function (err, result) {
      if (err) return console.log(err);
      // res.writeHead(200,{"content-type":"application/json"});
      res.json(result);
    });
  });
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
  
  // let product_img = req.files.uploader;
  // url = "uploads/"+Math.random(0,999)+req.files.uploader;
  // // console.log("product url",url);
  // // final_path = __dirname+"/../public/"+url;
  // // console.log(final_path);
  // product_img.mv("public/"+url, function(err,result) {
  //   if (err)
  //     return res.status(500).send(err);

  //     MongoClient.connect(dbURL, (err, client) => {
  //       if (err) return console.log(err);
  //       db = client.db('wedding'); // use crudDB

  //       var insertdata = {
  //         image_url:url,
  //       }

  //       console.log(insertdata);  
  //       db.collection('users').save(insertdata, function (err, result) {
  //         if (err) return console.log(err);
  //         res.json(result);
  //       });
  //     });
    // });
})


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
        res.json({succ:true,msg:'login successfully',username:result[0].username,f_name:result[0].f_name,l_name:result[0].l_name,key:result[0].key,gender:result[0].gender,email:result[0].email,product_img:result[0].product_img,phone:result[0].phone,category:result[0].category,description:result[0].description,experience:result[0].experience,dob:result[0].dob,token:encryptionString});
      }else{
        res.json({succ:false,msg:'Error while login'});
      }      
    });
  });}
});



router.post('/saveContact', function (req, res, next) {
  MongoClient.connect(dbURL, (err, client) => {
    if (err) return console.log(err);
    db = client.db('wedding'); // use crudDB
    db.collection('SaveContact').save(req.body, function (err, result) {
      if (err) return console.log(err);
      res.json(result);      
    });
  });
});


module.exports = router ;
