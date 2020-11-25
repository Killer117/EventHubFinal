const mongoose=require("mongoose");
const Event=require("./Event");

const usersSchema=new mongoose.Schema({
    
    name:{
        fname:String,
        lname:String
    },
    email:String,
    password:{
        type:String,
        min:6,
        max:20
    },
    dob:Date,
    gender:String,
    mobile:{
        type:String,
        min:10,
        max:10
    },
    address:{
        street:String,
        state:String,
        city:String,
        pincode:Number
    },
    bookedEvents:[{type:mongoose.Schema.Types.ObjectId,ref:"Event"}]
});

const User=mongoose.model("User",usersSchema);

module.exports=User;