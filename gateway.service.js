import express from "express";
import proxy from "express-http-proxy";

const app=express();

app.use('/stress-test',proxy('http:/localhost:8000'))
// app.use('/',proxy('http:/localhost:8080'))

app.listen(process.env.PORT ||8080, ()=>{
    console.log("Gateway service is running on port ", process.env.PORT)
})