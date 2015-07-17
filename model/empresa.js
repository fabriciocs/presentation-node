var conn = require('../conn/conn'),
empresa =  {
	nome : String,
	album : String,
	historia : String,
	slogan : String,
	resumo : String,
	idGoogleAnalytics : String,
	missao : String,
	visao : String,
	valores : String,
	dominio : String,
	urlLogo : String,
	telefone : String,
	endereco : String,
	emailContato : String,
	iframeGoogleMaps : String,
	nomeTema : String,
	nomeCorTema : String,
	temaDark : String,
	temaFullWidth : String,
	facebookPageUrl : String
};

var Empresa = conn.model("empresa",empresa, "empresas");
module.exports = Empresa;