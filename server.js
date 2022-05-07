var http=require('http')
var jwt=require("jsonwebtoken")
var express=require('express')
var mongoClient=require('mongodb').MongoClient
var app=express()
const{verify}=require("jsonwebtoken")
app.use(express.json())
mongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    if(err){
        console.log("error")
    }
    else{
        console.log("Successfully connected")
        db=client.db('employee')
       //d=client.d('userauthentication')
    }
})
app.get('/emps',verifyToken,(req,res)=>{
    db.collection('emp').find().toArray((err,items)=>{
        console.log(items)
        res.write(JSON.stringify(items))
        res.end()
    })
})
app.listen(2000,()=>{
    console.log("server started at port 2000")
})


//app.post('/addusers',verifyToken,(req,res)=>{
  //  res.send("adding post")
//})

//app.get("/getusers",verifyToken,(req,res)=>{
  // res.send("this is testing page")
//})





app.post('/addemp',verifyToken,(req,res)=>{
    console.log(req.body)
    db.collection('emp').insertOne(req.body)
   
    res.end("inserted")
})
app.put("/update/:id",verifyToken,(req,res)=>{
    var id=parseInt(req.params.id)
    db.collection('emp').updateOne({"_id":id},{$set:{"salary":req.body.salary}})
    res.end("updated")
})
app.delete("/delete/:id",(req,res)=>{
    var id=parseInt(req.params.id)
    db.collection('emp').deleteOne({_id:id})
    res.end("deleted")
})
app.get('/emp/:id',(req,res)=>{
    var id=parseInt(req.params.id)
    db.collection('emp').find({"_id":id}).toArray((err,items)=>{
        
        console.log(items)
        res.write(JSON.stringify(items))
        res.end()
    })
})
app.get('/adddata',(req,res)=>{

    console.log(req.body)
    db.collection('emp').insertOne(req.body)
   
    res.end("inserted")
})






app.post('/login',(req,res)=>{
    uname=req.body.username
    pwd=req.body.password
    db.collection("users").findOne({"username":uname,"password":pwd})
    .then((item)=>{
        if(item){
            const token=jwt.sign({"username":uname},"cvrcollege")
        res.json({
                 success:true,
                 message:"authentication success",
                 token:token 
                });
    res.end()
        }
    else{
        res.json({
            success:false,
            message:'no username and password',
        });
        res.end()
    }
})    
})

//.catch((err)=>{
  //  console.log("error",err)
//})

function verifyToken(req,res,next){
    let token=req.headers['authorization']
    if(token){
        token=token.split(' ')[1]
        console.log(token)
        jwt.verify(token,"cvrcollege",(err,decoded)=>{
            if(err){
                return res,json({
                    success:false,
                    message:'token is not valid'
                })
            }
            else{
                next();
            }
        })
    }
    else{
        return res.json({success:false,message:"a token is required for authorization"});
    }
}


