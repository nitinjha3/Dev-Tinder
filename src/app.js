//starting poin of nodejs
const express=require("express")

const app=express()

app.listen(3000,()=>{
    console.log("listing to PORT 3000!");
})

app.use("/user",(req,res,next)=>{
    res.send("Middleware 1!!")
    next()
})

app.get("/user/test",(req,res,next)=>{
    console.log("Handling the route user !!");
    res.send("Response 1");
    next();
},
(req,res)=>{
    console.log("Handling the route user 2!!");
    res.send("2nd Response!!");
}
);



app.get("/",(req,res)=>{
    res.send("hello from server"); 
})

app.get("/test/:id/:password",(req,res)=>{
    console.log(req.params);
    res.send("hello from test server");
})



