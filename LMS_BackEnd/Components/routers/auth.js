const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
 
const router = express.Router();

router.post('/register', async(req,res)=>{
    const{username,email,password,role} = req.body;
    console.log(req.body);
    try{
        const hashpassword = await bcrypt.hash(password,10);
        const user = new User({username,email,password:hashpassword,role});
        await user.save();
        res.json({message:'user registrated successfully'})
    }catch(err){
        res.status(500).json({message:'user not registrarion', error:err.message});
    }
})

router.post('/login',async(req,res)=>{
    const { email, password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user || !(await bcrypt.compare(password,user.password)))
            return res.status(401).json({message:'invalid'});
        const token = jwt.sign({id:user._id,role:user.role},
            process.env.JWT_SECRET,{expiresIn:'1h'}
        )
        res.json({token});
    }catch(err){
        res.status(500).json({message:"error login" , error : err.message});
    }
});

module.exports = router;