
var express = require('express');
var router = express.Router();
var config = require('./config');
var mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient
var dbURL = "mongodb://127.0.0.1:27017";


router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

  router.get('/sub', function (req, res, next) {
    // console.log("config.dbURL" + config.db.dbURL);
    // return;
    MongoClient.connect(config.db.dbURL, (err, client) => {
        
        if (err) return console.log(err);
       req.query
        console.log("coming here");
         db = client.db(config.db.dbName); // use crudDB
         db.collection(config.db.AuthUserTable).find({key:req.query} ,{_id:1,username:1,f_name:1,l_name:1}).toArray(function (err, result) {
   
          console.log(result);
          var title= req.params.headings;
       res.json( title );
        //  res.json(result);


         });
    });
}); 


// router.get("/sub/:headings", function(req, res) {
//     console.log("working");
//     var title= req.params.headings;
//     res.json( title );

//   });


module.exports = router;