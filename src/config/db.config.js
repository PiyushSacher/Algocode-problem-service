const mongoose=require("mongoose");

async function connectDB(){
    try {
        if(process.env.NODE_ENV === "production"){
            await mongoose.connect(process.env.ATLAS_DB_URL);
        }
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

module.exports=connectDB;
