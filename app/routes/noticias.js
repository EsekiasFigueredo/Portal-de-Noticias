
module.exports = function(application){
    
    application.get('/noticias', function(req,res){

         var connection = application.config.dbConnection();
         var noticiasModel = new application.app.models.NoticiasDAO(connection);// cooncentra todos os models em uma só lugar fazendo carregar auotmaticamento pelo consign

         noticiasModel.getNoticias(function(error, result){           
            res.render("noticias/noticias", { noticias : result })
        });// recupera a função exportada
    });
}