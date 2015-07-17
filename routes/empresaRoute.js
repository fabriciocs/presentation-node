var
	  express = require('express')
	, router = express.Router()
	, crypto = require('crypto')
	, checkAuth = require("./checkAuthentication")
	, Empresa  = require('../model/empresa');

router.get('/', function(req, res, next) {
	Empresa.find(function(err, data){
		if(err){
			res.json(err);
		}
		res.json(data[0]);
	});
});

router.get('/:id', function(req, res, next) {
	Empresa.find({"_id":req.param("id")},function(err, data){
		res.json(data);
	}).limit(10);
});

router.delete('/:id', function(req, res, next) {
	Empresa.findOneAndRemove({_id: req.params.id}, function(err){
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
	var empresa = new Empresa(req.body),
	toSave = empresa.toObject();
	delete toSave._id;
	Empresa.update({_id: empresa.id}, toSave, {upsert: true},function(err, data){
		if(err){
			console.log("erro: ", err);
		}
		res.json(data);
	});
});


module.exports = router;