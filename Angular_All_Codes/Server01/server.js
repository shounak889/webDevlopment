
// it will load the express module
express = require('express');

eobj = express();   

//configuring the post number
port = 5100

// serve should start in Listerner method

// it is like inline function 
eobj.listen(port, function(){
    console.log("Marvellous server is listening at port "+port);
});

eobj.get('/', function(req, res){
    res.send("Marvellous Server is ON...");
});