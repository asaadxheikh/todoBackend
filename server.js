var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
// create express app
var app = express();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json()) 
 
// var cors = require('cors');
// app.use(cors());

// Configuring the database
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || dbConfig.url, 
    { useNewUrlParser: true,useUnifiedTopology: true  }
);
//new access
mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})

// define a simple route
app.get('/', function(req, res){
    res.json({"message": "Developer code test running"});
});

require('./app/routes/note.routes.js')(app);
require('./app/routes/location.routes.js')(app);

// listen for requests
app.listen(process.env.PORT || 3000, function(){
    console.log("Server is listening on port 3000");
});
