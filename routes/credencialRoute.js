var
	  express = require('express')
	, router = express.Router()
	, crypto = require('crypto')
	, checkAuth = require("./checkAuthentication")
	, Credencial  = require('../model/credencial');

router.get('/', function(req, res, next) {
	Credencial.find(function(err, data){
		if(err){
			res.json(err);
		}
		res.json(data);
	});
});

router.get('/:id', function(req, res, next) {
	Credencial.find({"_id":req.param("id")},function(err, data){
		res.json(data);
	}).limit(10);
});

router.delete('/:id', function(req, res, next) {
	Credencial.findOneAndRemove({_id: req.params.id}, function(err){
		var msg ={
			msg : "Removido com Sucesso"
		};
		if(err){
			console.log("erro: ", err);
			msg.msg = "Não foi possível salvar";
		}
		res.json(msg);
	});
});


router.post('/', function(req, res, next) {
	var credencial = new Credencial(req.body),
	toSave = credencial.toObject();
	delete toSave._id;
	Credencial.update({_id: credencial.id}, toSave, {upsert: true},function(err, data){
		if(err){
			console.log("erro: ", err);
		}
		res.json(data);
	});
});

router.post('/:id/:senhaAtual/:novaSenha', function(req, res, next) {
	
		res.json({msg:"Try it later"});
});

module.exports = router;