var express = require('express');
var router = express.Router();
var body = require("body-parser");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sketch', { title: 'sketch' });
  res.io.on('connection', (socket) => {
  	console.log("connection");
	  socket.on('draw', (coord) => {
	  	// console.log(coord);
	    res.io.emit('draw', coord);
	  });
	  socket.on('pseudo', (pseudo) => {
	  	res.io.emit("pseudo", pseudo);
	  	console.log("pseudo:" + pseudo);
	  });
	});

});


module.exports = router;
