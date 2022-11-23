import mongoose from "mongoose";

export const init = async () => {
    try {
        const URL = process.env.MONGO_URL;
        await mongoose.connect(URL);
        console.log("Database connected");
    } catch (error) {
        console.log("Error to connect to Database:\n" + error.message);
    }
}