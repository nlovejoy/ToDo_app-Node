var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');

//configure our app
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('index');
});

app.post('/user/register', function (req, res) {
    res.send(req.body);
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT);
});