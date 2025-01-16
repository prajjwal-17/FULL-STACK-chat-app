import { z } from 'zod';
import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import { generateToken } from '../lib/utils.js';
import cloudinary from '../lib/cloudinary.js';

export const signup = async (req, res) => {

    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        fullName: z.string().min(5).max(100),
        password: z.string()
            .min(8, "Password must be at least 8 characters long")
            .max(30, "Password must be at most 30 characters long")
            .refine((value) => {
                const hasUpperCase = /[A-Z]/.test(value);
                const hasLowerCase = /[a-z]/.test(value);
                const hasSpecialChar = /[!@#$%^&*(),./;'{}<>:"|]/.test(value);
                return hasUpperCase && hasLowerCase && hasSpecialChar;
            }, {
                message: "Password must contain at least one uppercase letter, one lowercase letter, and one special character"
            })
    });

    const parsedData = requiredBody.safeParse(req.body);

    if (!parsedData.success) {
        return res.status(400).json({
            message: "Validation Failed",
            errors: parsedData.error.errors //will send error details
        });
    }

    const { email, password, fullName } = parsedData.data;

    try {
        // Check if the user already exists before proceeding
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                message: "User already exists",
            });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({
            email: email,
            password: hashedPassword,
            fullName: fullName
        });

        // Save the new user
        await newUser.save();

        // Generate JWT token
        generateToken(newUser._id, res);

        res.status(201).json({
            _id: newUser._id,
            email: newUser.email,
            profilePic: newUser.profilePic || null,
            fullName: newUser.fullName
        });

    } catch (error) {
        console.error('Error during signup:', error); // Log the full error stack to debug

        if (error.code === 11000) {
            return res.status(409).json({
                message: "User already exists",
            });
        }

        // Return error message with more detailed information for debugging
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message, // Log the actual error message
            stack: error.stack // Log the full error stack trace
        });
    }
};

export const login = async(req, res) => {
    const {email,password}=req.body;

    try {
        const user= await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "Invalid Credentials" })
        }
        const isPasswordCorrect=await bcrypt.compare(password,user.password);
        if(!isPasswordCorrect){  
            return res.status(400).json({message: "Invalid Credentials" })
        }

        generateToken(user._id,res)
        res.status(200).json({
            _id:user._id,
            email: user.email,
            profilePic: user.profilePic || null,
            fullName: user.fullName
        })
    } catch (error) {
        console.log("Error in login controller",error.message);
        res.status(500).json({message: "Internal Server Error"}) 
    }

};

export const logout = async(req, res) => {
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"Logged out Successfully"})
    } catch (error) {
        console.log("Error in logout controller",error.message);
        res.status(500).json({message: "Internal Server Error"}) 
    }
};

export const updateProfile=async(req,res)=>{
    try {
       const {profilePic}=req.body;
       const userId=req.user._id;

       if(!profilePic){
        return res.status(400).json({message: "Profile pic is required"});
       }

       const uploadResponse=await cloudinary.uploader.upload(profilePic);
       const updatedUser=await User.findByIdAndUpdate(userId,{profilePic:uploadResponse.secure_url},{new:true});
       res.status(200).json(updatedUser);
    } catch (error) {
        console.log("error in update profile:",error);
        res.status(500).json({message: "Internal Server Error"});
    }
};
 