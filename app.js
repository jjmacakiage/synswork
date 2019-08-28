const mta = (require('./MasterTradeAgreement.js')).MasterTradeAgreement;
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(cors());

const mockSetup = function(){
    mta.addCounterParty("Bank1");
    mta.addCounterParty("Bank2");
    mta.addTradeAgreement(1, 2);
    //mta.addTrade(1, 2);
};

mockSetup();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/tradeagreements', (req, res) => {
    if(req.body.id1 === req.body.id2){
        return res.status(400).send({
            success: false,
            message: "Cannot create a trade agreement between the same party."
        });
    }

    if(mta.addTradeAgreement(Number(req.body.id1), Number(req.body.id2))){
        return res.status(200).send({
            success: true,
        });
    }
    else{
        return res.status(400).send({
            success: false,
        });
    }
});

app.get('/parties/:partyid/counterparties', (req, res) => {
    const partyid = parseInt(req.params.partyid, 10);
    const cps = mta.getCounterParties(partyid);

    return res.status(200).send({
        success: true,
        counterparties: cps
    });
});

app.post('/parties/', (req, res) => {
    if(mta.addCounterParty(req.body.party)){
        return res.status(200).send({
            success: true,
        });
    }
    else{
        return res.status(400).send({
            success: false,
        });
    }
});

app.get('/parties/:partyid/trades/:tradeid', (req, res) => {
    const partyid = parseInt(req.params.partyid, 10);
    const tradeid = parseInt(req.params.tradeid, 10);
    const info = mta.getTradeInfo(partyid, tradeid);
    if(Object.keys(info).length === 0){
        return res.status(400).send({
            success: false,
        });
    }
    return res.status(200).send({
        success: true,
        tradeInfo: info
    });
});

app.post('/parties/:partyid/trades/', (req, res) => {
    const partyId = parseInt(req.params.partyid, 10);
    if(mta.addTrade(partyId, req.body)){
        return res.status(200).send({
            success: true,
        });
    }
    else{
        return res.status(400).send({
            success: false,
        });
    }
});

app.get('/parties/:partyid/trades/', (req, res) => {
    const partyid = parseInt(req.params.partyid, 10);
    return res.status(200).send({ //TODO: Returning true either way??
        success: true,
        trades: mta.getAllTradeInfo(partyid)
    });
});

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

const PORT = 4500;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
