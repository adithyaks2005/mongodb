const mongoose = require("mongoose");

//mongoose.connect("ur1").then(()=>{}).catch()=>{})
    mongoose.connect
      ("mongodb+srv://adithya:adithya@cluster0.13fwz.mongodb.net/sampleDB?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{console.log("connect to db")})
.catch((err)=>{console.log(err)})