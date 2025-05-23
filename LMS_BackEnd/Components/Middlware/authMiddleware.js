const jwt = require('jsonwebtoken');

const authenticateJWT = (req,res,next)=>{
    const token = req.header('Authorization');
    if(!token) return res.status(403).json({message:'Access denied'});
    try{
        const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(error){
        return res.status(401).json({message:'invalid token'})
    }
}

const autherizeRole = (role)=>(req,res,next)=>{
    if(req.user.role !== role) return res.status(403).json({message:'unautorize'});
    next();
}

module.exports = {authenticateJWT,autherizeRole};