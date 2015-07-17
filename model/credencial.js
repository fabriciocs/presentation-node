var conn = require('../conn/conn');

var credencial = {
	email: String,
	senha: String,
	login: String,
	admin: Boolean
};

var Credencial = conn.model("credencial",credencial, "credenciais");
module.exports = Credencial;