const mongoose = require('mongoose');

const UserSchems = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true},
    role:{type:String,enum:["student","teacher","admin"],default:"student",required:true}
},{timestamps:true});

module.exports=mongoose.model("user",UserSchems);