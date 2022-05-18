var express=require("express")
var mongoose=require("mongoose")
var app=express()
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/empdb')
db=mongoose.connection
db.on("error",function()
{
    console.log("error connection")
})
db.once("open",()=>{
    console.log("connection established")
})
app.listen(2000,()=>{
    console.log("server started")
})

var empschema=new mongoose.Schema({
    name:String,
    salary:Number,
    age:Number
})
empmodel=mongoose.model("employee",empschema)
const employee=[{"name":"Nandini",
                        "Salary":200000,
                        "age":20}]
app.post("/addemp",(req,res)=>{
    empmodel.collection.insert(employee)
    res.end("added succssfully")
})
app.get("/emps",(req,res)=>{
    const emps=empmodel.find({"name":"Nandini"},(err,result)=>{
        res.send(result)
    })
})
app.put("/upemp/:age",(req,res)=>{
    var age = req.params.age
    const emps=empmodel.updateOne({"age":age},{$set:{name:req.body.name}},(err,result)=>{
        res.send(result)

        
    })
})
 
app.delete("/delemp/:age",(req,res)=>{
    var age = req.params.age
    const emps=empmodel.deleteOne({"age":age},(err,result)=>{
      res.end("deleted")

        
    })
})
