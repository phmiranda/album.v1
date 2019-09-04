var http = require('http')
    ,app = require('./config/express')
    db = require('./config/database');

http.createServer(app).listen(3000, function() {
    console.log('Executando o sistema em modo de desenvolvimento no endereço: ' + this.address().port);
});

