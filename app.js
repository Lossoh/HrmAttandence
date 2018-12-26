/*om*/
/*?include globle file*/
const RAMINC = require('./raminc');
const fs = require('fs');
const path = require('path');

/*?projcet required modul*/
const createError = require('http-errors');
const express = require('express');
const http = require('http');
const url = require('url');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');
const minify = require('express-minify');
const bodyParser = require('body-parser');
const responseTime = require('response-time');
const errorHandler = require('errorhandler');
const login = require('connect-ensure-login');
const connectError = require('connect-error');
const async = require('async');
const methodOverride = require('method-override');
/*?include files*/
const utils = require('./libs/utils');
const expressStats = require('./libs/express-stats');
/*?string truncation prototype*/
String.prototype.trunc = String.prototype.trunc ||
    function(n){
        return this.length>n ? this.substr(0,n-1)+'...' : this;
    };
/*?create express app Obj*/
var app = express();
/*?Other Middlewares*/
app.disable('x-powered-by');
/*?set app port*/
app.set('port', process.env.PORT || Cg.port);
/*?set View engin*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
/*?manage error*/
app.use(connectError());
/**/
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
/*?use cookies*/
app.use(cookieParser(process.env.COOKIE_SECRET || 'e0e66b926b6021aa79194b68162e015bffe38646'));
/*?use session*/
app.use(session({
    //store: sessionStore,
    secret: process.env.COOKIE_SECRET || 'rkeyboard rcat',
    resave: false,
    saveUninitialized: true
}));
/*?set AppMode*/
process.env.NODE_ENV = Cg.appMode;
app.use(responseTime());
app.use(expressStats());
/*?set Local variable*/
app.use(function(req, res, next) {
    if(!req.Cg) { req.Cg =  Cg}
    if(!req.Cg.async) { req.Cg.async = async; }

    next();
});
/*?pass session to view*/
app.use(function(req, res, next){
    res.locals.session = req.session;
    res.locals.pathname = url.parse(req.url).pathname;
    next();
});
/*?router setup*/
var tfa,passport;
var router = require('./libs/router')(app, tfa, passport, login);
/*?set stetic public folder for client output*/
app.use(minify());
app.use(require('less-middleware')(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, 'public')));
/**/
app.use(function(req, res, next){
    res.status(404);
    // res.render('error', { status: 404, url: req.url,Cg:Cg });
    next();
});
/*?error display*/
if ('development' === app.get('env')) {
    // development only error handler
    app.use(errorHandler());
} else {
    // production error handler
    app.use(function(err, req, res, next){
        console.log('err', err);
        res.status(err.status || 500);
        res.render('error/generic', {
            status: err.status || 500,
            message: err.message || 'Internal Server Error'
        });
    });
}
/**/
console.log('[Core] Application setup successfully, running in', process.env.NODE_ENV === 'production' ? 'Production' : 'Development');
/*?Express HTTP Server*/
var server = http.createServer(app);
/*?socket.listen(server, socketClients);*/
server.listen(app.get('port'), function(){
    console.log('[Core] Express server listening on port ' + app.get('port'));
});

/*?exports app*/
module.exports = app;
/**/
sram(
//Cg,


    /**/
    'Jay Siya Ram'
);
