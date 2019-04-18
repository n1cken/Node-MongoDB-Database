var express = require ('express');
var path = require ('path');
var cons = require ('consolidate');
var pg = require ('pg');
var dust = require ('dustjs-helpers');

var app = express();


app.engine('dust', cons.dust);
//stalla in templace engine

app.set('view engine', 'dust');
//stall in var man hittar sidan
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
    console.log('någon försöker accessa /');
    res.send('hej där!');

});

app.listen(3000, function() {
    console.log('server är startad');

});