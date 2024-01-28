//loading express
express = require('express');


//created the object of express

eobj = express();

//creating variable to store port number

port=5101

// listen method to listen clinet request 


eobj.listen(port, function(){
    console.log("Server is in listening mode");
})

eobj.get(('/'), function(req,res){
    res.send("Server connection is successful");
})


