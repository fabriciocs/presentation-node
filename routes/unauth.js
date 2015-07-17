var
	  express = require('express')
	, passport = require('passport')
	, router = express.Router()
	, checkAuth = require("./checkAuthentication")
	, Usuario  = require('../model/usuario');
router.post('/local-reg', passport.authenticate('local-signup'),  function(req, res) {
    res.json(req.user);
  }
);

router.post('/login', passport.authenticate('local-signin'),function(req, res) {
	console.log("Verificando: "+req.user);
    res.json(req.user);
  }
);

router.get('/logout', function(req, res){
  var name = req.user.username;
  console.log("LOGGIN OUT " + req.user.username)
  req.logout();
  res.redirect('/');
  req.session.notice = "You have successfully been logged out " + name + "!";
});


module.exports = router;
