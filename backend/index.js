const express = require ("express");
const mongoose= require ("mongoose");
const app = express();
const dotenv= require("dotenv")
const pinRoute = require ("./routes/pins");
const userRoute = require ("./routes/users")

dotenv.config();

app.use(express.json())

mongoose
.connect(process.env.MONGO_URL, {useNewUrlParser:true})
.then(()=>{
    console.log("MongoDB connected!")
})
.catch((err)=>console.log(err));

app.use("/api/pins",pinRoute)
app.use("/api/users",userRoute)
//indicate what listens
app.listen(8800, ()=>{
    console.log("Backend server xxx is running")
})