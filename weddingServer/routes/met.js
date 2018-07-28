
var express = require('express');
var router = express.Router();
var config = require('./config');
var mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient
var dbURL = "mongodb://127.0.0.1:27017";


router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

  router.get('/sub/:head', function (req, res, next) {
    console.log("config.dbURL" + config.db.dbURL);
    // return;
    MongoClient.connect(config.db.dbURL, (err, client) => {
        
        if (err) return console.log(err);
      
        console.log(req.params.head);
         db = client.db(config.db.dbName); // use crudDB
         db.collection(config.db.expTable).find({'Category':req.params.head },{ 'Category':1,'Description':1}).toArray(function (err, result) {
   
          console.log(result);
        res.json( result );
    


         });
    });
}); 


router.get('/search/:head', function (req, res, next) {
  console.log("config.dbURL" + config.db.dbURL);
  // return;
  MongoClient.connect(config.db.dbURL, (err, client) => {
      
      if (err) return console.log(err);
    
      console.log(req.params.head);
       db = client.db(config.db.dbName); // use crudDB
       db.collection(config.db.AuthUserTable).find({'category':req.params.head }).toArray(function (err, result) {
 
        console.log(result);
      res.json( result );
      // res.json({username:result[0].username,f_name:result[0].f_name,l_name:result[0].l_name,gender:result[0].gender,email:result[0].email,photo:result[0].photo,phone:result[0].phone,category:result[0].category,description:result[0].description,experience:result[0].experience,dob:result[0].dob,token:encryptionString});


       });
  }); 
}); 

router.get('/savedDetails/:head', function (req, res, next) {
  console.log("config.dbURL" + config.db.dbURL);
  // return;
  MongoClient.connect(config.db.dbURL, (err, client) => {
      
      if (err) return console.log(err);
    
      console.log(req.params.head);
       db = client.db(config.db.dbName); // use crudDB
       db.collection(config.db.svTable).find({'savekey':req.params.head }).toArray(function (err, result) {
 
        console.log(result);
      res.json( result );


       });
  }); 
}); 


router.post('/DeleteContact', function (req, res, next)
 {
  
  MongoClient.connect(dbURL, (err, client) => 
  {
    if (err) return console.log(err);
    db = client.db('wedding'); // use crudDB 
    db.collection('SaveContact').remove({'username':req.body.username,'savekey':req.body.savekey},function(err,result) 
    {
    if (err) return console.log(err);
    if(result.length>0){ 
      res.json({succ:false,msg:'Delete Successfull'});
    }else{
      res.json({succ:true,msg:'Error while Deleting'});
    }      
    });
  });
});

module.exports = router;