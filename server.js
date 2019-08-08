const db = require('./db/db');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/counterparties', (req, res) => {
    if(!req.body.username){
        res.status(400).send({
            success: 'false',
            message: 'No username given, cannot give counter parties.'
        });
        return;
    }

    const counterParties = [];
    for(const association of db.tradeAssociations){
        if(req.body.username === association.username){
            counterParties.push(association.party);
        }
    }
    res.status(200).send({
        success: 'true',
        message: 'Counter parties successfully received.',
        counterParties: counterParties,
    });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});