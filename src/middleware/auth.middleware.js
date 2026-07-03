import {asyncHandler} from "../util/asyncHandler"
import {ApiError} from "../util/ApiError"
import { User } from "../../../KeepShare API/src/models/user.model"


export const verifyJWT=asyncHandler(async(req,res,next)=>{
try {
    const token= req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer", "")
    if(!token){
    throw new ApiError(401,"User is not authorized ")
    }
    const decoded=jwt.verify(token,ACCESS_TOKEN_SECRET)
    if (!decoded){
    throw new ApiError(401,"Invalid user")
    }
    
    const user=await User.findById(decoded?._id).select("-password -refreshToken")
    if(!user){
        throw new ApiError(401,"User not found")
    }
    
    req.user=user
    next()
} catch (error) {
    throw new ApiError(401,error?.message|| "invalide accessToken")
}

})