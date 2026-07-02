import { app } from "./app";
import dotenv from "dotenv";

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