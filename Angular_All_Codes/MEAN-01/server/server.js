express = require('express');

eobj = express();

port = 5555;

//TO handle CORS
// Cross Origin Resource Sharing


eobj.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",
        "http://localhost:4200");

        res.header("Access-Control-Allow-Headers",
        "Origin, X-Reuested-width, Content-Type, Accept");

        next();
})

// this in not inbuilt
function starter()
{
    console.log("Marvellous server is in listening mode at "+port);
}

// inbuilt
eobj.listen(port,starter);


function MarvellousGet(req,res)
{
    res.send("Marvellous server started...");
}


eobj.get('/',MarvellousGet);

function MarvellousBatches(req,res)
{
    res.json({"Name":"PPA", "Fees": 19500, "Duration":"4Months"});
}

eobj.get('/getBatches',MarvellousBatches);


