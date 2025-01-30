var express =require("express");

var app = express();

  require('./db')
  const stuModel = require("./model/student");
   
var port = 3000;
app.use(express.json());
app.post("/",(req,res)=>{
    try {
        stuModel(req.body).save();
        res.send("data added successfully")
    } catch (error) {
        res.send(error);
        
    }
});
app.get('/',async(req,res)=>{
    var data = await stuModel.find();
    res.send(data);try {
        
    } catch (error) {
     res.send(error);   
    }
});
  
app.listen(port,(req,res)=>{
    console.log(`server is listening in port ${port}`);
});