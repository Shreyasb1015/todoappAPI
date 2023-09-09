const express=require('express');
const colors=require('colors');
const morgan =require('morgan');
const dotenv=require('dotenv');
const connectDB=require('./config/db');

const app=express();

app.use(morgan('dev'));


dotenv.config({

   path:'./config/config.env'
})

connectDB();


app.get('/todo',(req,resposne)=>{

   resposne.status(200).json({
      "name":"Shreyas",
      
   });
});

const PORT= process.env.PORT||3000;


app.listen(PORT,
   console.log(`server is running on port:${PORT}`.red.underline.bold)
);
