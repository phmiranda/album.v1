/* comentários */
var express = require('express')
    ,app = express()
    ,bodyParser = require('body-parser')
    ,routes = require('../config/routes');

/* comentário */
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/* comentário */
routes(app);

/* comentário */
module.exports = app;
