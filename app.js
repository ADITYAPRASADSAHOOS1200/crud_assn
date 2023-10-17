require('dotenv').config();
const express=require('express');
const connecttodb=require('./config/db.js');
const cors=require('cors');
const userroute=require('./route/userRoute.js')
const app=express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//init
connecttodb();

app.use("/",userroute)

module.exports=app;