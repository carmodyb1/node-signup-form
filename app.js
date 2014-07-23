var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/success', function(req, res) {
	res.render('success');
});


app.post('/formsubmit', function(req, res){

	// pull the submitted data from the request object
	var postedData = req.body;

	// reassign the value to lastSubmission
	lastSubmission = postedData;

	// echo the exact same data back to the page
	// res.send( 'Welcome, ' + postedData.username );

	// redirect the user
	res.redirect('/');
});




var server = app.listen(9349, function() {
	console.log('Express server listening on port ' + server.address().port);
});






