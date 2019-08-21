const express = require('express');
const bodyParser = require('body-parser');
const Web3 = require('web3');

const app = express();
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
const abi = require("./abi").abi;
const utils = require("./utils");

const address = "0x4923A8e4bEd25D7a1a0aB3D25e2Ac1A6211ec033";

const sender = "0xBE14623B7E18293a8aAfD2c60d5Ad3Bee6c089e7";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * This creates a trade agreement between the two parties given, allowing them to allege trades to the other.
 */
app.post('/api/tradeagreements', (req, res) => {
    const contract = new web3.eth.Contract(abi, address);

    contract.methods.addTradeAgreement(req.body.id1, req.body.id2).send({from: sender, gas: 5000000}, function(err, result){
        if(!err){
            return res.status(200).send({
                success: true,
                message: "New trade agreement succesfully added.",
            });
        }
        else{
            console.log(err);
            return res.status(400).send({
                success: 'false',
                message: 'Error adding trade agreement.'
            });
        }
    });
});

/**
 * This endpoint gets all the counterparties a given counterparty (id) can trade with.
 */
app.get('/api/parties/:id/counterparties', (req, res) => {
    const contract = new web3.eth.Contract(abi, address);

    contract.methods.getCounterParties(req.params.id).call(function(err, result){
        if(!err && result != null){
            const counterParties = utils.deserializeStringArray(result);

            return res.status(200).send({
                success: 'true',
                message: 'Counterparties successfully received.',
                counterparties: counterParties
            });
        }
        else{
            console.log(err);
            return res.status(400).send({
                success: 'false',
                message: 'Error retrieving counterparties.'
            });
        }
    });
});

/**
 * This endpoint allows you to add a new counterparty to the system.
 */
app.post('/api/parties', (req, res) => {
    if(!req.body.party){
        res.status(400).send({
            success: 'false',
            message: 'No counterparty given to add.'
        });
        return;
    }

    const contract = new web3.eth.Contract(abi, address);

    contract.methods.addCounterParty(req.body.party).send({from: sender, gas: 999999}, function(err, result){
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

/**
 * This endpoint gets the trade with tradeid for the party with partyid.
 */
app.get('/api/parties/:partyid/trades/:tradeid' , (req, res) => {
    const tradeid = parseInt(req.params.tradeid, 10);
    const partyid = parseInt(req.params.partyid, 10);
    const contract = new web3.eth.Contract(abi, address);

    contract.methods.getTradeInfo(tradeid, partyid).call(function(err, result){
        if(!err && parseInt(result[0]) !== 0) {
            return res.status(200).send({
                success: 'true',
                message: 'Trade successfully received.',
                id: result[0],
                party1: result[1],
                party2: result[2],
                status: result[3]
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

/**
 * This gets all trades for a particular counterparty across all trade agreements.
 * TODO: Currently, the result is given as a set of arrays as opposed to an array of structs.
 * TODO: This should change in the future as this will not be ideal once all the trade info has been modelled.
 */
app.get('/api/parties/:id/trades', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const contract = new web3.eth.Contract(abi, address);

    contract.methods.getAllTradeInfo(id).call(function(err, result){
        if(!err && parseInt(result[0]) !== 0) {
            console.log(result);
            return res.status(200).send({
                success: 'true',
                message: 'Trade successfully received.',
                id: result[0],
                party1: result[1],
                party2: result[2],
                status: result[3]
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

/**
 * This alleges a new trade from the party with the url id to the counterparty given in the body.
 */
app.post('/api/parties/:id/trades', (req, res) => {
    if(!req.body.counterpartyid){
        res.status(400).send({
            success: 'false',
            message: 'Missing parameter.'
        });
        return;
    }

    const contract = new web3.eth.Contract(abi, address);
    contract.methods.addTrade(partyid, req.body.counpartyid).send({from: sender, gas: 979800}, function(err, result){
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