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
})

app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params);
  try {
    await stuModel.findByIdAndDelete(req.params.id)
    res.send("Delete successfully!!")
  } catch (error) {
    res.send(error.message)
  }
})

app.put('/edit/:id',async(req,res)=>{
  try {
    var data =await stuModel.findByIdAndUpdate(req.params.id,req.body);
    res.send("update successfully");

    
  } catch (error) {
    res.send(error);
  }
})
  
app.listen(port,(req,res)=>{
    console.log(`server is listening in port ${port}`);
});