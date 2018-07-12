var express = require('express');
var router = express.Router();
var config = require('./config');
var mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient
/* GET home page. */
router.get('/login.html', function (req, res, next) {
    if(config.isLoggedIn(req,res)){
        res.redirect(config.siteConfig.base_url+"dashboard");
    }
     res.render("admin_panel/auth/login",{siteConfig:config.siteConfig});
}); 

// it will check login
router.post('/checklogin', function (req, res, next) {
    // console.log("config.dbURL" + config.db.dbURL);
    // return;
    MongoClient.connect(config.db.dbURL, (err, client) => {
        if (err) return console.log(err);
        console.log("coming here");
        db = client.db(config.db.wedding); // use crudDB
        db.collection(config.db.users).find({'password':req.body.password,'username':req.body.username}).toArray(function (err, result) {
          if (err) return console.log(err);
          console.log("length of result is "+result.length);
          if(result.length>0){
              req.session.userDetails = result[0];
              req.session.isLoggedIn = true;
              res.redirect(config.siteConfig.base_url+"dashboard?loginsucc=1");
          }else{
            res.redirect(config.siteConfig.base_url+"auth/login?loginsucc=0");
          }
        //  res.json(result);
        });
    });
}); 