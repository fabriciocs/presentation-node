var conn = require('../conn/conn');

var usuario = {
	nome: String,
	cpf: String,
	dataNascimento: String
};

var Usuario = conn.model("usuario",usuario, "usuarios");
module.exports = Usuario;