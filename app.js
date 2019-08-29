const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const address = 'http://127.0.0.1:4500';

/**
 * This creates a trade agreement between the two parties given, allowing them to allege trades to the other.
 */
app.post('/api/tradeagreements', (req, res) => {
    axios.post(address + '/tradeagreements', {id1: req.body.id1, id2: req.body.id2})
        .then(response => {
            return res.status(200).send({
                success: true,
                message: "New trade agreement succesfully added.",
            });
        })
        .catch(error => {
            console.log(error);
            return res.status(400).send({
                success: false,
                message: "Error adding trade agreement. "
            });
        });
});

/**
 * This endpoint gets all the counterparties a given counterparty (id) can trade with.
 */
app.get('/api/parties/:id/counterparties', (req, res) => {
    const id = parseInt(req.params.id, 10);
    axios.get(address + '/parties/' + id + '/counterparties')
        .then(response => {
            return res.status(200).send({
                success: true,
                counterparties: response.data.counterparties,
            });
        })
        .catch(error => {
            console.log(error);
            return res.status(400).send({
                success: false,
                message: "Error getting counterparties"
            });
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

    axios.post(address + '/parties', {party: req.body.party})
        .then(response => {
            return res.status(200).send({
                success: true,
                message: "New counterparty succesfully added.",
            });
        })
        .catch(error => {
            console.log(error);
            return res.status(400).send({
                success: false,
                message: "Error adding counterparty."
            });
        });
});

/**
 * This endpoint gets the trade with tradeid for the party with partyid.
 */
app.get('/api/parties/:partyid/trades/:tradeid' , (req, res) => {
    const tradeid = parseInt(req.params.tradeid, 10);
    const partyid = parseInt(req.params.partyid, 10);

    axios.get(address + '/parties/' + partyid + '/trades/' + tradeid)
        .then(response => {
            return res.status(200).send({
                success: true,
                tradeInfo: response.data.tradeInfo,
            });
        })
        .catch(error => {
            console.log(error);
            return res.status(400).send({
                success: false,
                message: "Error getting trade info."
            });
        });
});

/**
 * This gets all trades for a particular trader according to the counterparty they belong to.
 */
app.get('/api/traders/:id/trades', (req, res) => {
    const id = parseInt(req.params.id, 10);

    axios.get(address + '/traders/' + id + '/trades/')
        .then(response => {
            console.log(response);
            return res.status(200).send({
                success: true,
                trades: response.data.trades,
            });
        })
        .catch(error => {
            console.log(error);
            return res.status(400).send({
                success: false,
                message: "Error getting trade info."
            });
        });
});

/**
 * This alleges a new trade from the party with the url id to the counterparty given in the body.
 */
app.post('/api/traders/:id/trades', (req, res) => {
    console.log(req.body.result);
    if(!req.body.result.counterPartyId){
        res.status(400).send({
            success: 'false',
            message: 'Missing parameter.'
        });
        return;
    }

    axios.post(address + '/traders/' + req.params.id.toString() + '/trades', req.body.result)
        .then(response => {
            return res.status(200).send({
                success: true,
                message: "New trade succesfully added.",
                data: req.body.result
            });
        })
        .catch(error => {
            console.log(error);
            return res.status(400).send({
                success: false,
                message: "Error adding trade."
            });
        });
});

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
