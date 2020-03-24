var mysql = require('mysql');

var connMySql  = function(){
        // a conexão dentro desta variavel, faz com que a conexão so seja feita quando necessária
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'esther2010',
            database: 'portal_noticias'
        });

}
module.exports = function(){
    return connMySql;
    }
