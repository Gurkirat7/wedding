
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


// router.get("/sub/:headings", function(req, res) {
//     console.log("working");
//     var title= req.params.headings;
//     res.json( title );

//   });


module.exports = router;