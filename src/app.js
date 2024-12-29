//starting poin of nodejs
const express=require("express")

const app=express()

app.listen(3000,()=>{
    console.log("listing to PORT 3000!");
    
})

app.use((req,res)=>{
    res.send("hello from server");
    
})
