express = require('express');

obj1 = express();

port = 5555;

obj1.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",
    "http://localhost:4200");

    res.header("Access-Control-Allow-Headers",
    "Origin, X-Reuested-width, Content-Type, Accept");

    next();
})

function starter()
{
    console.log("Server is listening");
}

obj1.listen(port, starter);

function f1(req,res)
{
    res.send("Server is started");
}

obj1.get('/',f1);

function f2(req,res)
{
    res.send("My server is runnign and I'm printing whatever I want \n and it is great");
}

obj1.get('/fun',f2);
