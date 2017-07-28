var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var tareasRoutes = require('./routes/tareas');

mongoose.connect('mongodb://ds041821.mlab.com:41821/practica', function(err){
  if (err) {
    console.log("Connection error");
  }else{
    console.log("Connection successful");
  }
});

var app = express();

// view engine setup
app.set("view engine","jade");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use('/tareas', /*auth,*/ tareasRoutes);

app.get("/",function(req,res){
  res.render("pie");
});

app.listen(8081);
