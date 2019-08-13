/* comentários */
var Datastore = require('nedb')
    ,dbName = 'angularjs.db'
    ,db;

/* comentários */
if(!db) {
    db = new Datastore({
        filename: dbName,
        autoload: true
    });
    console.log('Banco ' + dbName + ' pronto para uso')
}

/* comentários */
module.exports = db;