var express=require('express')
var firebase=require('firebase')
var app=express()
app.use(express.json())
app.listen(2000,()=>{
    console.log("server started")
})
const firebaseConfig = {
    apiKey: "AIzaSyAwLLO-kloYCWjMszjqnpJUVHEri3NaqKY",
    authDomain: "awt-9eff5.firebaseapp.com",
    databaseURL: "https://awt-9eff5-default-rtdb.firebaseio.com",
    projectId: "awt-9eff5",
    storageBucket: "awt-9eff5.appspot.com",
    messagingSenderId: "235231107777",
    appId: "1:235231107777:web:b0b82765cab8057e995240",
    measurementId: "G-LZ8SH9HPX3"
  };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  firebase.initializeApp(firebaseConfig)
  dbref=firebase.database().ref("student")
  app.get("/stu",(req,res)=>{
      dbref.on('value',(snap)=>{
          res.send(snap.val())
      })
  })
  app.post("/addstu",(req,res)=>{
      stu={
          "id":1,
          "name":"gayathri"
      }
      dbref.child(stu.id).set(stu,(data)=>{
          res.send("inserted")
      })
  })
  app.delete("/del/:id",(req,res)=>{
      var id=req.params.id
      dbref.child(id).remove()
      res.send("deleted")
  })
  app.put("/update/:id",(req,res)=>{
      var id=req.params.id
      console.log(req.body)
      dbref.child(id).update({
            "name":"chinnu"
      })
      res.send("updated")
  })
  app.post("/addStudent",(req,res)=>{
      dbref.child(req.body.id).set(req.body,(data)=>{
          res.send("inserted")
      })
  })
