let express = require('express');
let bodyParser = require('body-parser');
let handlebars = require('express-handlebars');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const app = express();
// setup handlebars view engine
app.engine('handlebars', 
    handlebars(
      {
        defaultLayout: 'main_logo', 
        handlebars: allowInsecurePrototypeAccess(Handlebars)
      }));
app.set('view engine', 'handlebars');

// static resources
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routing
let routes = require('./routes/index');
app.use('/', routes);

app.use(function(req, res) {
    res.status(404);
    res.render('404');
});

app.listen(3000, function(){
  console.log('http://localhost:3000');
});

