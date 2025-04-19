require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./Components/config/db');
const authRouter = require('./Components/routers/auth');
const protectedRouter = require('./Components/routers/protected');


const app = express();
app.use(express.json());
app.use(cors());

connectDB();

//routes
app.use('/api/auth',authRouter);
app.use('/api/protected',protectedRouter);



const port = process.env.PORT || 3000



app.listen(port,()=>{
    console.log(`welcome ${port}`);
})