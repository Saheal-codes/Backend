const express=require ("express")
const bodyparser=require ("body-parser")
const mongoose=require ("mongoose")
const morgan=require ("morgan")
const cors=require("cors")
const app=express();
app.use(cors())
const routes = require("./routes.js")
app.use(bodyparser.json())
app.use(bodyparser.urlencoded())
app.use(routes)
app.use("*",(req,res)=>{
    res.status(404).send("Not Found !")
})
app.use(morgan("tiny"))
app.listen(80,()=>{
    console.log("Server Is Running!!")
})
mongoose
    .connect("mongodb://localhost:27017/newdatabase")
    .then( ()=>{
        console.log("A database with the name \"newdatabase\" has been connected !")})
    .catch( (err)=>{
        console.error("Some error occurred",err)})
module.exports=app