const fs = require('fs');
const path = require('path');
const url = require('url');
const events = require('events');
var router = require('koa-router')();

var Router = function(app){
  console.log();
    //访问根路径时，会来到这个generator里面
    router.get('/', function (next){
        this.render('login.html');
    });
    return router;
}
module.exports = Router;