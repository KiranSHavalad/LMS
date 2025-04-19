const express = require ('express');
const {authenticateJWT, autherizeRole} = require("../Middlware/authMiddleware");
const router = express.Router();

router.get('/admin',authenticateJWT,autherizeRole("admin"),(req,res)=>{
    res.json({message:"welcome admin"});
});

router.get('/user',authenticateJWT,(req,res)=>{
    res.json({message:"welcome user"});
});

module.exports = router;