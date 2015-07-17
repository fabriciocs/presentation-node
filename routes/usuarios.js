var
	  express = require('express')
	, router = express.Router()
	, crypto = require('crypto')
	, checkAuth = require("./checkAuthentication")
	, Usuario  = require('../model/usuario');


router.use(function(req, res, next){
	checkAuth.check(req, res, next);
});

router.get('/', function(req, res, next) {
	Usuario.find(function(err, data){
		res.json(data);
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
