module.exports.index = function(appliction,req,res){

    var connection = appliction.config.dbConnection();
    var NoticiasModels = new appliction.app.models.NoticiasDAO(connection);

    NoticiasModels.get5UltimasNoticias(function(error,result){ 
        
        res.render('home/index', {noticias: result});
    });
    
}