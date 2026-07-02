import express from "express"


const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true

}));
app.use(express.json({limit:"16kb"}))

app.use(express.urlencoded({limit:"16kb"}))

app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send("Hello World")
})

export {app}