//starting poin of nodejs
const express=require("express")

const app=express()

app.listen(3000,()=>{
    console.log("listing to PORT 3000!");
})

app.get("/",(req,res)=>{
    res.send("hello from server"); 
})

app.get("/test/:id/:password",(req,res)=>{
    console.log(req.params);
    res.send("hello from test server");
})

