import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./db/index.db.js";
dotenv.config({
    path:"./.env"
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8080, ()=>{
        console.log("Server running on PORT",process.env.PORT)
    })
})
.catch((err)=>{
    console.log("MONGODB CONNECTION FAILED",err);
    process.exit(1);
})