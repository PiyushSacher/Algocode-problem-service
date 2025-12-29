const express=require("express");
const {PORT}=require("./config/server.config")
const app=express();
const apiRouter=require("./routes/index");
const BaseError = require("./errors/base.error");
const errorHandler = require("./utils/errorHandler");
const connectDB = require("./config/db.config");
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/api",apiRouter)


//last middleware if any error comes
app.use(errorHandler)

app.listen(PORT,async()=>{
    await connectDB();
    console.log("Connected to db")
    console.log(`Server listening on port ${PORT}`);
    //throw new BaseError("Some Error",404,"Something went wrong")
})
