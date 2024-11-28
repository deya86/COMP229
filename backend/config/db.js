import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:abcd1234%40@cluster0.mwldi.mongodb.net/Group_Project').then(()=>console.log("DB Connected"));
}