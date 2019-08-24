let express = require("express"); //get express

let bodyParser = require('body-parser'); //import body parser

let mongoose = require("mongoose"); //import mogoose for db

var port = process.env.PORT || 8080; //set listening server port

let app = express(); //save the instance of express in a constant app


//body parsing
app.use(bodyParser.urlencoded({
    extended: true
})); //configure bodyParser to handle post request

app.use(bodyParser.json()); //use bodyParser and return answer in json


//mongodb
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true}); //connect to mongoose
var db = mongoose.connection; //create instance of database connection
if(!db){
    console.log("Error connecting db");
}else console.log("Db connected successfully");


//routing
app.get('/', (req, res) => res.send('Welcome to node api learn')); //set default url message

app.listen(port, function(){
    console.log("Server is listening on port " + port); //confirm server listening port
})

let apiRoutes = require("./api-routes"); //import api routes

app.use('/api', apiRoutes); //use api-routes in the app
