module.exports.noticias = function(application,req,res){
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);// cooncentra todos os models em uma só lugar fazendo carregar auotmaticamento pelo consign

    noticiasModel.getNoticias(function(error, result){           
    res.render("noticias/noticias", { noticias : result })
    });// recupera a função exportada
}

module.exports.noticia = function(application,req,res){
    var connection = application.config.dbConnection();

    var noticiasModel = new application.app.models.NoticiasDAO(connection);
    noticiasModel.getNoticia(function(error, result){
    res.render("noticias/noticia", { noticia : result });
   });
}