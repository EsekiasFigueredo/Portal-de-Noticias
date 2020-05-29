function NoticiasDAO(connection){
    this._connection = connection;
};

NoticiasDAO.prototype.getNoticias = function(callback){
   this._connection.query("SELECT * FROM noticias order by data_criacao desc",callback);
}

NoticiasDAO.prototype.getNoticia = function(callback){
    this._connection.query("SELECT * FROM noticias where id_noticia = 2",callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia,callback){
    
    this._connection.query("insert into noticias set ?", noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

module.exports = function(){
    return NoticiasDAO;
}