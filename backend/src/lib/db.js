import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        console.log("MONGODB_URI:", process.env.MONGODB_URI); // Log to verify
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};
