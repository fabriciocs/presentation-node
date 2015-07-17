

module.exports = {
	check :  function(req, res, next) {
	  if (req.isAuthenticated()) { return next(); }
	  req.session.error = 'Please sign in!';
	  res.status(401).send({ success : false, message : 'authentication failed' });
	}
};