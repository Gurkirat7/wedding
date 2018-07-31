var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient
var dbURL = "mongodb://127.0.0.1:27017";
var config = require('./config');

//to see url go in /bin and press command -> mongo.exe

/* GET home page. */
router.get(['/', '/index.html'], function (req, res, next) {
  if (!config.isLoggedIn(req, res)) {
    res.redirect(config.siteConfig.base_url + "auth/login.html");
  }
  res.render('admin_panel/products/index', {
    title: 'Manage Ideas Pics',
    subTitle: 'Add Ideas',
    siteConfig: config.siteConfig,
    actionURL: config.siteConfig.base_url + "products/insert",
    extraMessage: typeof req.query.insertSuccess != "undefined" ? req.query.insertSuccess == 1 ? "User Added Successfully" : "Error while adding users" : ""
  });
});
// doing insert
router.post('/insert', function (req, res, next) {
  if (!config.isLoggedIn(req, res)) {
    res.redirect(config.siteConfig.base_url + "auth/login.html");
  }
  MongoClient.connect(dbURL, (err, client) => {
    if (err) return console.log(err);
    db = client.db('wedding'); // use abc
    console.log(req.body);
    console.log(req.files.product_img.name);
    let product_img = req.files.product_img;
    var url = "products_img/files" + Math.random(0, 55555) + req.files.product_img.name;
    product_img.mv('public/' + url, function (err) {
      if (err)  
        return res.status(500).send(err);
      req.body['product_img'] = url;
      console.log("data to be inserted", req.body);
      db.collection('idea').save(req.body, function (err, result) {
        if (err) return console.log(err);
        res.redirect(config.siteConfig.base_url + "products/?insertSuccess=1");
      });
    });
  });
});



router.get('/delete', function (req, res, next) {
  if (!config.isLoggedIn(req, res)) {
    res.redirect(config.siteConfig.base_url + "auth/login.html");
  }
  // console.log(req.query);
  MongoClient.connect(dbURL, (err, client) => {
    if (err) return console.log(err)
    db = client.db('wedding'); // use abc
    db.collection('idea').remove({ "_id": new mongodb.ObjectId(req.query.objectID) }, function (err, result) {
      if (err) return console.log(err);
      console.log(result);
      res.redirect(config.siteConfig.base_url + "products/all_users.html?delSucc=1");
    });
  });
});

// list of all users
router.get('/all_users.html', function (req, res, next) {
  if (!config.isLoggedIn(req, res)) {
    res.redirect(config.siteConfig.base_url + "auth/login.html");
  }
  MongoClient.connect(dbURL, (err, client) => {
    if (err) return console.log(err)
    db = client.db('wedding'); // use abc
    db.collection('idea').find().toArray(function (err, result) {
      if (err) return console.log(err);
      res.render('admin_panel/products/userslist', {
        title: 'products',
        subTitle: 'Products list',
        'users': result,
        siteConfig: config.siteConfig,
        extraMessage: typeof req.query.delSucc != "undefined" ? req.query.delSucc == 1 ? "User Deleted Successfully" : "Error while deleting users" : ""
      });
    });
  });
});


// list of all users
router.get('/updateUser', function (req, res, next) {
  if (!config.isLoggedIn(req, res)) {
    res.redirect(config.siteConfig.base_url + "auth/login.html");
  }
  MongoClient.connect(dbURL, (err, client) => {
    if (err) return console.log(err)
    db = client.db('wedding'); // use abc
    db.collection('idea').find({ "_id": new mongodb.ObjectId(req.query.objectID) }).toArray(function (err, result) {
      if (err) return console.log(err);
      // console.log("value coming for userid "+req.query.objectID);
      // console.log(result[0]);
      res.render('admin_panel/products/updateuserForm', {
        title: 'Manage Ideas',
        subTitle: 'Update Ideas',
        usersDetails: result[0],
        actionURL: config.siteConfig.base_url + "products/updateuserindb",
        siteConfig: config.siteConfig,
        extraMessage: typeof req.query.insertSuccess != "undefined" ? req.query.insertSuccess == 1 ? "User updated Successfully" : "Error while updating users" : ""
      });
    });
  });
  
});

// doing insert
router.post('/updateuserindb', function (req, res, next) {
  if (!config.isLoggedIn(req, res)) {
    res.redirect(config.siteConfig.base_url + "auth/login.html");
  }
  console.log("data is coming");
  MongoClient.connect(dbURL, (err, client) => {
    if (err) return console.log(err);
    db = client.db('wedding'); // use abc 
    db.collection('idea').update({ 'product_id': req.body.product_id }, req.body, { upsert: false }, function (err, result) {
      if (err) return console.log(err);
      res.redirect(config.siteConfig.base_url + "products/updateUser?objectID=" + req.body.objectID + "&insertSuccess=1");
    });
  });
});

// doing insert
router.post('/getProducts', function (req, res, next) {

  MongoClient.connect(dbURL, (err, client) => {
    if (err) return console.log(err);
    db = client.db('wedding'); // use abc 
    db.collection('idea').find({'category':req.body.category}).toArray(function (err, result) {
      if (err) return console.log(err);
      res.json(result);
    });
  });
});



router.get('/getImages', function (req,res, next) {

  MongoClient.connect(dbURL, (err, client) => {
    if (err) return console.log(err);
    db = client.db('wedding'); // use abc 
    db.collection('idea').find().toArray(function (err, result) {
      if (err) return console.log(err);
      res.json(result);
    });
  });
});




module.exports = router;
