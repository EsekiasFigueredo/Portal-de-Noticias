
module.exports = function(application){
    application.get('/formulario_inclusao_noticia', function(req,res){
        res.render('admin/form_add_noticia');
    });
    application.post('/noticias/salvar', function(req,res){
        var noticia = req.body;//o express popula o body do request quando enviamos informações via post

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);// cooncentra todos os models em uma só lugar fazendo carregar auotmaticamento pelo consign
            // serve para validar os campos,se caso faltar alguma informação não sera inserido banco de dados
            req.assert('titulo','Titulo é Obrigatório').notEmpty();
            req.assert('resumo','Resumo é Obrigatório').notEmpty();
            req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
            req.assert('data_noticia','Data é Obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
            req.assert('noticia','Noticia é Obrigatório').notEmpty();

            var erros = req.validationErros();

            if (erros) {
                res.render('admin/form_add_noticia');
                return;
            }

         noticiasModel.salvarNoticia(noticia,function(error, result){           
            res.redirect('/noticias');
        });
    });

        
}