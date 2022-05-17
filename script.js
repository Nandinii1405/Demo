var http = require('http')
var express = require('express')
var jwt = require("jsonwebtoken")
var app = express()
var cors = require('cors')

const { verify } = require("jsonwebtoken") 
var mongoClient = require('mongodb').MongoClient
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
mongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    if(err){
        console.log("Error")
    }
    else{
        console.log("Connection is established")
        db = client.db('empdb')
    }
})
app.post('/users',(req,res)=>{
    username = req.body.username
    password = req.body.password
    db.collection('users').findOne({"username":username,"password":password}).then((result)=>{
        if(result){
            const token = jwt.sign({"username":username},"cvrcollege")
            console.log(token)
            res.json({
                success:true,
                message:"Authentication Successful",
                token:token
            })
            res.end()
        }
        else{
            res.json({
                success:false,
                message:"No username and password"
            })
            res.end()
        }
    })
})


function verifyToken(req,res,next){
    let token = req.headers['authorization']
    if(token){
        token = token.split(" ")[1]
        console.log(token)
        jwt.verify(token,"cvrcollege",(err,decoded)=>{
            if(err){
                return res.json({
                    success:false,
                    message:"token is not valid"
                })
            }
            else{
                next();
            }
        })
    }
    else{
        return res.json({
            success:"false",
            message:"a token is required for authentication"
        })
    }
}

app.listen(2000,()=>{
    console.log("Server Started")
})
app.get('/users',(req,res)=>{
    res.setHeader("content-type","application/json")
   /db.collection('users').find().toArray((err,items)=>{
       console.log(items)
       res.write(JSON.stringify(items))
       res.end()
    })
})
