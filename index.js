const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors());

app.listen(5000,()=>{
    console.log("server is running",5000)
})