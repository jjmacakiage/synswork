const CounterParty = (require('./CounterParty.js')).CounterParty;
const TradeAgreement = (require('./TradeAgreement')).TradeAgreement;

function MasterTradeAgreement(){
    this.tradeAgreements = [];
    this.counterParties = new Map();
    this.numCounterParties = 0;
    this.numTrades = 0;
}

MasterTradeAgreement.prototype.getCounterParties = function(id){
    const party = this.counterParties.get(id);
    if(!party){
        console.error("Party does not exists, id: " + id);
        return [];
    }

    let ret = [];
    for(const tr of this.tradeAgreements){
        const cp1 = tr.party1;
        const cp2 = tr.party2;

        if(id === cp1.id){
            ret.push(cp2);
        }
        else if(id === cp2.id){
            ret.push(cp1);
        }
    }

    return ret;
};

MasterTradeAgreement.prototype.addCounterParty = function(name){
    for(const [key, value] of this.counterParties){
        if(value.name === name){
            console.log("Counter party already exists: " + name);
            return false;
        }
    }

    this.numCounterParties++;

    this.counterParties.set(this.numCounterParties, new CounterParty(this.numCounterParties, name));
    return true;
};

MasterTradeAgreement.prototype.addTradeAgreement = function(idParty1, idParty2){
    if(this.findTradeAgreement(idParty1, idParty2)[1]){
        console.log("Trade agreement already exists.");
        return false;
    }

    const cp1 = this.counterParties.get(idParty1);
    const cp2 = this.counterParties.get(idParty2);
    if(!cp1 || !cp2){
        console.error("One or both counterparties given do not exists.");
        return false;
    }

    this.tradeAgreements.push(new TradeAgreement(cp1, cp2));
    return true;
};

/**
 * Adds a new trade between two parties given, given that a trade agreement exists between the two.
 * @param idParty1 Counterparty innvoled in trade. This is the party alleging the trade.
 * @param idParty2 The other counterparty.
 */
MasterTradeAgreement.prototype.addTrade = function(idParty1, idParty2){
    const [i, exists] = this.findTradeAgreement(idParty1, idParty2);
    if(!exists){
        console.error("Trade agreement does not exist");
        return false;
    }

    this.tradeAgreements[i].addTrade(idParty1, ++this.numTrades);
    return true;
};

MasterTradeAgreement.prototype.getTradeInfo = function(partyId, tradeId){
    for(const ta of this.tradeAgreements){
        if(ta.party1.id === partyId || ta.party2.id === partyId){
            const info = ta.getTradeInfo(tradeId);
            if(Object.keys(info).length > 0){
                return info;
            }
        }
    }

    return {};
};

MasterTradeAgreement.prototype.getAllTradeInfo = function(idParty){
    const trades = [];
    for(const ta of this.tradeAgreements){
        if(ta.party1.id === idParty || ta.party2.id === idParty){
            trades.push(...ta.getAllTradeInfo(idParty));
        }
    }
    return trades;
};

MasterTradeAgreement.prototype.findTradeAgreement = function(idParty1, idParty2){
    const tas = this.tradeAgreements;
    for(let i = 0; i < this.tradeAgreements.length; i++){
        if((tas[i].party1.id === idParty1 && tas[i].party2.id === idParty2) ||
            tas[i].party1.id === idParty2 && tas[i].party2.id === idParty1){
            return [i, true];
        }
    }
    return [-1, false];
};

exports.MasterTradeAgreement = new MasterTradeAgreement();