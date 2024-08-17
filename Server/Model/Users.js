import mongoose from "mongoose";
import { genSalt,hash } from "bcryptjs";

const userShema= new mongoose.Schema({
    Name:{
        type:String,
        required:[true,'Name is required'],
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true,

    },
    Password:{
        type:String,
        required:[true,'Password is required'],
       

    },
   
   
})