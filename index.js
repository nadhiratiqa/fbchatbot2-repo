var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.listen((process.env.PORT || 1337, () => console.log('webhook is listening')));

//server frontpage
app.get('/', function (req,res){
	res.send('This is a FBchat Server');
});

//facebook web
app.get('/webhook', function (res,req) 
{
	if (req.query['hub.verify_token'] ==='fbchatbot_verify_token')
	{
	res.send(req.query['hub.challenge']);
	} else 
	{
		res.send('Invalid verify token');
	}
});