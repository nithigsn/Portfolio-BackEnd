const express = require('express');
const mongoose=require('mongoose');

// Schema
const userSchema=new mongoose.Schema({
   name:{type:String,required:true},
   email:{type:String,required:true},
   number:{type:Number,required:true},
   message:{type:String,required:true}
});

//create model
const UserModel=mongoose.model("user",userSchema);



//router code

const userRouter=express.Router();

userRouter.post('/contact',async (req,res)=>{
    try{
        const payload=req.body;
        const obj={
            name:payload.name,
            email:payload.email,
            number:payload.number,
            message:payload.message
        };

        const newUser=await UserModel.create(obj);
        res.json({
            status:true,
            msg:'data posted successfully',
            data:newUser
        });
    } catch(error){
        res.json({
            status:false,
            msg:'Go learn',
            data:'error'
        });
    }
});



module.exports=userRouter;