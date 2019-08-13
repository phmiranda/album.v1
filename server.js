/* comentário */
var http = require('http')
    ,app = require('./server/express')
db = require('./database/database');

/* comentário */
http.createServer(app).listen(3000, function() {
    console.log('O servidor está sendo executado na porta: ' + this.address().port);
});
