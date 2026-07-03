import mongoose from "mongoose";
import { DB_NAME } from "../constanst.js";
const connectDB=async()=>{
   try {
     const connectionInstance=mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    //  console.log(`App running on DB HOST ${connectionInstance.connection.host}`).js
    
   } catch (error) {
    console.log("Mongodb connection Failed",error)
    process.exit(1)
   }
}

export {connectDB}