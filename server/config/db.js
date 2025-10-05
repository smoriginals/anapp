import mongoose from "mongoose";

const connectDB=async()=>{
    try{
          await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    }
    catch (err) {
        alert("Console:", err.message);
        console.error('MongoDB connection failed:', err.message);
        process.exit(1); // Stop server if DB fails
    }
}

export default connectDB;