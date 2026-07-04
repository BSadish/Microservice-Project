import express from "express"
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
const app=express()

app.use(morgan('dev'))
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true

}));
app.use(express.json({limit:"16kb"}))

app.use(express.urlencoded({limit:"16kb"}))

app.use(cookieParser())

app.get('/',(req,res)=>{
    for(let i=0;i<1000000000;i++){

    }
    res.send("Hello World")
})


export {app}