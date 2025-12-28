const express=require("express");
const {PORT}=require("./config/server.config")
const app=express();
const apiRouter=require("./routes/index")
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/api",apiRouter)

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
})
