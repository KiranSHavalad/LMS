const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("mongodb Connected");       
    }catch(err){
        console.log("not connected",err.message);
    
    }
}

module.exports = connectDB;