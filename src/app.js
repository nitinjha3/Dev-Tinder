//starting poin of nodejs
const express=require("express")

const app=express()

app.listen(3000,()=>{
    console.log("listing to PORT 3000!");
})

//checking for authorization using middleware

app.use("/user",(req,res,next)=>{
    console.log("checking authorization");
    
    const token="xyza";
    const isAuthorized=token==="xyza"

    if(!isAuthorized){
        res.status(401).send("Unauthorized request!!")
    }
    else{
        next();
    }
})

app.get("/user/getAllData",(req,res)=>{
    res.send("All data sent");
})

app.get("/user/DeleteUser",(req,res)=>{
    res.send("deleted the user");
})



