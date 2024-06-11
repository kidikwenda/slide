const express = require('express');
const path = require('path');
var serveStatic = require('serve-static')

app = new express();

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
    res.render('welcome');
});

app.listen(8080, function(){
    console.log('listening on 8080');
});

