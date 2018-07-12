var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient
var dbURL = "mongodb://127.0.0.1:27017";

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
  MongoClient.connect(dbURL, (err, client) => {
    if (err) return console.log(err);
    db = client.db('wedding'); // use crudDB
    // var token = 123;
    // db.collection('users').update(req.body,{$set:{token:token}});
      
    db.collection('users').find({'password':req.body.password,'username':req.body.username}).toArray(function (err, result) {
      if (err) return console.log(err);
      res.json(result);      
    });
  });
});
module.exports = router;
