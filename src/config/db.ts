// db_1.ts
import mongoose from 'mongoose';

mongoose.set("strictQuery", true);

const connectDB = async () => {
    try {
        console.log("Entering connectDB");
        await mongoose.connect('mongodb://127.0.0.1:27017/Meta-authservice');
        console.log("Connected to the MongoDB database");
    } catch (error) {
        console.error("Error connecting to the MongoDB database:", error);
        process.exit(1);
    }
};

export default connectDB;


export const b=()=> {
    console.log('hkjhkjhkjgggggggggg');
    
}