const mongoose = require("mongoose");
 const studentschema = mongoose.Schema({
studentName :String,
studentAge :Number,


 });

 const studentModel = mongoose.model("student",studentschema);
 module .exports= studentModel;