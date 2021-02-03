const express=require('express');
const app=express();
const port=process.env.PORT || 8080;





app.get('/',(req,res,next)=>{
    res.send(`welcome!,your server is running on ${port}`)
})








app.listen(port ,()=>{
    console.log(`port is listening on ${port}`)
})

