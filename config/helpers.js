const MySqli = require('mysqli');

let  conn  =  new  MySqli ( {
    host : 'localhost' ,  // IP / domain name
    post : 3306 ,  // port, default 3306
    user : 'root' ,  // username
    passwd : '' ,  // password
    charset : '' ,  // database encoding, default utf8mb4 [optional]
    db : 'db_shop'  // database can be specified or not [optional]
} );

let db = conn.emit(false, '');

module.exports = {
    database: db
}