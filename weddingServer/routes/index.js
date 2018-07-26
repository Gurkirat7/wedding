var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient
var dbURL = "mongodb://127.0.0.1:27017";
var config = require('./config');
//require multer for the file uploads
var multer = require('multer');
// set the directory for the uploads to the uploaded to
var DIR = './uploads/';
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
var upload = multer({dest: DIR}).single('photo');

// home page
router.get(['/', '/index.html'], function (req, res, next) {
  res.render('frontend/index', {siteConfig:config.siteConfig});
});
// about us page
router.get('/about.html', function (req, res, next) {
  res.render('frontend/about', {siteConfig:config.siteConfig});
});
// contact us page
router.get('/contact.html', function (req, res, next) {
  res.render('frontend/contact', {siteConfig:config.siteConfig});
});
router.get('/my-profile.html', function (req, res, next) {
  res.render('frontend/my-profile', {siteConfig:config.siteConfig});
});
// router.get('/dashboard.html', function (req, res, next) {
//   res.render('admin_panel/dashboard/dashboard', {siteConfig:config.siteConfig});
// });

router.post('/', function (req, res, next) {
  var path = '';
  upload(req, res, function (err) {
     if (err) {
       // An error occurred when uploading
       console.log(err);
       return res.status(422).send("an Error occured")
     }  
    // No error occured.
    //  path = req.file.path;
     return res.send("Upload Completed for "); 
    });
})

module.exports = router;
