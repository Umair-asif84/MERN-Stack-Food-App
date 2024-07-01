import mongoose from "mongoose";

export const connectDB = async()=>{
        await mongoose.connect('mongodb+srv://umairasif384:manj7112474@cluster0.zcvciu0.mongodb.net/Food-Delivery').then(()=>console.log('DB connected'));
}