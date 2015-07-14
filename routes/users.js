var
	  express = require('express')
	, router = express.Router()
	, crypto = require('crypto')
	, Usuario  = require('../model/usuario');

/* GET users listing. */
router.get('/', function(req, res, next) {
	var usr = new Usuario({
		nome: crypto.randomBytes(64).toString('hex'),
		cpf: crypto.randomBytes(64).toString('hex')
	});
	usr.save(function(err, data){
		if(err){
			console.log("erro: ", err);
		}
		Usuario.find(function(err, data){
			res.json(data);
		}).limit(10);
	});
	
});
router.get('/:id', function(req, res, next) {
	Usuario.find({"_id":req.param("id")},function(err, data){
		res.json(data);
	}).limit(10);
	
});
router.post('/', function(req, res, next) {
	var usr = new Usuario(req.body);
	usr.save(function(err, data){
		if(err){
			console.log("erro: ", err);
		}
		res.json(data);
	});
	
});
module.exports = router;
