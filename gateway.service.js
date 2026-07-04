import express from "express";
import proxy from "express-http-proxy";

const app=express();

app.use('/stress-test',proxy('http:/localhost:8080'))
app.use('/',proxy('http:/localhost:8080'))