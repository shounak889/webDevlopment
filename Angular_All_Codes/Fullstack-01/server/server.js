express = require('express');

eobj = express();

port = 5200;

//it is not inbult function
function starter()
{
    console.log("Marvellous server is started  at port 5200");
}

eobj.listen(port,starter);

//it is not inbult function
function acceptRequest(req, res)
{
    res.send("Marvellous server is ON...");
}

balanceAmount = 10000;

eobj.get('/', acceptRequest);

function creditAmount(req, res)
{
    value = req.query.amount;
    balanceAmount = balanceAmount + Number(value);
    res.send("Credit option is selected and balance is ...."+balanceAmount);
}

eobj.get('/Credit',creditAmount);

function debitAmount(req,res)
{
    value = req.query.amount;
    balanceAmount = balanceAmount - Number(value);
    res.send("Debit option selected and balance is ...."+balanceAmount);
}

eobj.get('/Debit',debitAmount);

