import mongoose from "mongoose";
import { DB_NAME } from "../constanst";
const connectDB=async()=>{
   try {
     connectionInstance=mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
     console.log(`App running on DB HOST ${connectionoInstance.connection.host}`)
   } catch (error) {
    console.log("Mongodb connection Failed",error)
    process.exit(1)
   }
}

export {connectDB}