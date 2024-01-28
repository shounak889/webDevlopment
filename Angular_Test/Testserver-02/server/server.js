
express = require('express');

obj = express();

port = 5100;

function starter()
{
    console.log("Server is started at port 5100");
}

obj.listen(port,starter);

obj.get('/',function(req,res){
    console.log("on port "+port);
    res.send("onnnn");
});

function something(req, res)
{
    res.send("THe prt is "+port);
}

// obj.get('/something',function(req,res){
//     res.send("port is "+port);
// });

obj.get('/some',something);

name = "Rajesh Kumar";

function origin(req,res)
{
    res.send("Name is "+name);
}

obj.get('/origin',origin);

function nameChange(req,res)
{
    name = "Ram Patil";
    res.send("Name chnages to "+name);
}

obj.get('/nameChange', nameChange);