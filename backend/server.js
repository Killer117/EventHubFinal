const express=require("express");
const mongoose=require("mongoose");
const app=express();

const cors=require("cors");
const bodyParser=require("body-parser");

const userRoute=require("./routes/users");
const faqContents=require("./faq");

app.use(cors());
app.use(bodyParser.json());


mongoose.connect("mongodb://localhost:27017/eventHubDB",{useNewUrlParser:true,useUnifiedTopology:true});


app.use("/api/users",userRoute);

app.get("/api/faq",(req,res)=>{
    res.send(faqContents);
});

app.listen(5000,function(){
    console.log("Server is running on port 5000");
});









