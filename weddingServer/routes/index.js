var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient
var dbURL = "mongodb://127.0.0.1:27017";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
