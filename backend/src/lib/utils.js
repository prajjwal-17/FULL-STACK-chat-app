import jwt from "jsonwebtoken";
export const generateToken=(userId,res)=>{
   console.log("Respose is :"+res)
   const token=jwt.sign({userId},process.env.JWT_SECRET,{
    expiresIn:"7d"
   })

   res.cookie("jwt", token, {
  maxAge: 7 * 24 * 60 * 60 * 1000,
  httpOnly: true,
  sameSite: "none",       // ✅ allow cross-origin
  secure: true            // ✅ required when sameSite is "none"
});


   return token;

}
