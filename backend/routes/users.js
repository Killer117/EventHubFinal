const express=require("express");
const router=express.Router();

const User=require("../models/User");


router.post("/register",function(req,res){

    User.find({email:req.body.email},function(err,foundUsers){
        if(foundUsers.length===0){
            const newUser=new User({
                name:{
                    fname:req.body.fname,
                    lname:req.body.lname
                },
                email:req.body.email,
                password:req.body.password,
                dob:req.body.dob,
                gender:req.body.gender,
                mobile:req.body.mobile,
                address:{
                    street:req.body.address,
                    state:req.body.state,
                    city:req.body.city,
                    pincode:req.body.pincode
                },
            });
        
            newUser.save();
            
            res.send(true);
        }else{
            res.send("User already registered");
        }
    });
    
    
});

router.post("/login",function(req,res){
    let email=req.body.email;
    let password=req.body.password;

    User.findOne({email:email},function(err,foundUser){
        if(err){
            console.log(err);
        }else{
            if(foundUser){
                if(foundUser.password===password){
                    res.send({found:true,id:foundUser._id});
                    console.log("Successfully logged In");
                }else{
                    res.send({found:"incorrect"});
                    console.log("Incorrect email or password");
                }
            }else{
                res.send({found:"incorrect"});
                console.log("Incorrect email or password");
            }
        }
    });

});


module.exports=router;

