var express    =    require('express');
var fs = require ('fs');
var app        =    express();
var server = require('http').createServer (app);

require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
	
//Test serving static file
app.get('/test', function (req, res){
	console.log ('GET /test');
	res.render('main.ejs', {page:"index.ejs"});
});

app.get('/index', function (req, res){
	console.log ('GET /index');
	res.render('main.ejs', {page:"index.ejs"});

	});
	
app.get('/viewCustomers', function (req, res){
	console.log ('GET /viewCustomers');
	res.render('main.ejs', {page:"viewCustomers"});
});

app.get('/Zak', function (req, res){
	console.log ('GET /Zak');
	res.render('main.ejs', {page:"index"});
});

	
app.get('/', function (req, res){
	console.log ('GET /index');
	res.render('index.html');
	});
	
app.use(express.static(__dirname + '/public'));
	
server.listen (3000);
console.log("Express is running on port 3000");