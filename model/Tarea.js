var mongoose = require("mongoose");

var TareaSchema = new mongoose.Schema({
  articulo: {type:Number, required:true},
  talla: {type:String, required:true},
  precio_uni: {type:Number, required:true}
});

module.exports = mongoose.model("Tarea",TareaSchema);
