import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";
const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true

}));
app.use(express.json({limit:"16kb"}))

app.use(express.urlencoded({limit:"16kb"}))

app.use(cookieParser())

app.get('/',(req,res)=>{
    for(let i=0;i<10000000;i++){

    }
    res.send("Hello World")
})
app.get('/test',(req,res)=>{
    for(let i=0;i<10000000;i++){

    }
    res.send("Hello World")
})

export {app}