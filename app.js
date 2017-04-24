var express = require('express');
var app = express();
app.get('/', function(req,res){
	res.send('Hey you made an API call');
});

app.post('/', function(req,res){
	res.send('Hey you made an  post API call');
});
app.put('/', function(req,res){
	res.send('Hey you made an put API call');
});
app.delete('/', function(req,res){
	res.send('Hey you made an delete API call');
});
app.listen(3000, function(){
	console.log('server started at port 3000');
});	