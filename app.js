const express = require('express');
const bodyParser = require('body-parser');
const Web3 = require('web3');

const app = express();
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
const userABI = require("./userabi").abi;

const users = {"exponentialcherub": "0xad23dbE8F427feB799907d9e90A196dCeeF14bFa",
               "garry": "0x95B7D56687a69d0BC167AD496d16322291FDaa6D"};

const sender = "0xBE14623B7E18293a8aAfD2c60d5Ad3Bee6c089e7";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/:user/counterparties', async (req, res) => {
    const userContract = new web3.eth.Contract(userABI, users[req.params.user]);
    const counterParties = [];

    let i = 0;
    let outOfRange = false;
    while(!outOfRange) {
        await userContract.methods.getCounterParty(i).call().then(function(r){
            if(r === "OUTOFRANGE"){
                outOfRange = true;
                return;
            }
            counterParties.push(r);
            i++;
        });
    }

    return res.status(200).send({
        success: 'true',
        message: 'Counterparties successfully received.',
        counterparties: counterParties
    });
});

app.post('/api/:user/counterparties', (req, res) => {
    if(!req.body.counterparty){
        res.status(400).send({
            success: 'false',
            message: 'No counterparty given to add.'
        });
        return;
    }

    const userContract = new web3.eth.Contract(userABI, users[req.params.user]);

    userContract.methods.addCounterParty(req.body.counterparty).send({from: sender},
        function(err, result){
        if(!err){
            return res.status(200).send({
                success: true,
                message: "New counterparty succesfully added.",
            });
        }
        else{
            console.log(err);
            return res.status(400).send({
                success: 'false',
                message: 'Error adding counterparty.'
            });
        }
    });
});

app.get('/api/:user/trades/:id' , (req, res) => {
    const id = parseInt(req.params.id, 10);
    const userContract = new web3.eth.Contract(userABI, users[req.params.user]);

    userContract.methods.getTradeInfo(id).call(function(err, result){
        if(!err && parseInt(result[0]) !== 0) {
            return res.status(200).send({
                success: 'true',
                message: 'Trade successfully received.',
                id: result[0],
                buyer: result[1],
                seller: result[2],
                productCode: result[3],
                amount: result[4]
            });
        }
        else {
            console.log(err);
            return res.status(400).send({
                success: 'false',
                message: 'Error getting trade info, trade may not exist.'
            });
        }
    });
});

app.post('/api/:user/trades', (req, res) => {
    if(!req.body.buyer || !req.body.seller || !req.body.productCode || !req.body.amount){
        res.status(400).send({
            success: 'false',
            message: 'Missing parameter.'
        });
        return;
    }

    const userContract = new web3.eth.Contract(userABI, users[req.params.user]);

    userContract.methods.addNewTrade(req.body.buyer, req.body.seller, req.body.productCode,
        parseInt(req.body.amount, 10)).send({from: sender, gas: 979800}, function(err, result){
        if(!err){
            return res.status(200).send({
                success: true,
                message: "New trade succesfully created."
            });
        }
        else{
            console.log(err);
            return res.status(400).send({
                success: 'false',
                message: 'Error creating trade.'
            });
        }
    });
});

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});