import express from "express"
import morgan from "morgan"
const app=express();




app.get('/',(req,res)=>{
    for(let i=0;i<1000000000;i++){

    }
    res.send("Hello World")
})

app.listen(8000, ()=>{
    "Server is running on PORT 8000" 
})