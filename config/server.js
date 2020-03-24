var express = require('express');
var consign = require('consign');// chamamento do consign
var bodyParse = require('body-parser');//implementação do body-parse
var expressValidator = require('express-validator');//implemnatção do validador de informações


var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParse.urlencoded({extended:true}));//fazer a paremetrização para mostrar a url codificada
app.use(expressValidator());

consign()
        .include('/app/routes')
        .then('/config/dbConnection.js')
        .then('/app/models')
        .into(app);//inclui as rotas das views na aplicação

module.exports = app;