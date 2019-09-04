const Org = (require('./Org.js')).Org;
const TradeAgreement = (require('./TradeAgreement')).TradeAgreement;

function MasterTradeAgreement(){
    this.tradeAgreements = [];
    this.orgs = {};
    this.numOrgs = 0;
    this.numTrades = 0;
}

MasterTradeAgreement.prototype.getCounterParties = function(id){
    const org = this.orgs[id];
    if(!org){
        console.error("Organisation does not exists, id: " + id);
        return [];
    }

    let ret = [];
    for(const tr of this.tradeAgreements){
        const cp1 = tr.party1;
        const cp2 = tr.party2;

        if(id === cp1.id){
            ret.push({name: cp2.name, id: cp2.id});
        }
        else if(id === cp2.id){
            ret.push({name: cp1.name, id: cp1.id});
        }
    }

    return ret;
};

MasterTradeAgreement.prototype.addOrg = function(name){
    for(const id in this.orgs){
        if(this.orgs[id].name === name){
            console.log("Counter party already exists: " + name);
            return false;
        }
    }

    this.numOrgs++;

    this.orgs[this.numOrgs] = new Org(this.numOrgs, name);
    return true;
};

MasterTradeAgreement.prototype.addTradeAgreement = function(idParty1, idParty2){
    if(this.findTradeAgreement(idParty1, idParty2)[1]){
        console.log("Trade agreement already exists.");
        return false;
    }

    const cp1 = this.orgs[idParty1];
    const cp2 = this.orgs[idParty2];
    if(!cp1 || !cp2){
        console.error("One or both counterparties given do not exists.");
        return false;
    }

    this.tradeAgreements.push(new TradeAgreement(cp1, cp2));
    return true;
};

/**
 * Adds a new trade between two parties given, given that a trade agreement exists between the two.
 */
MasterTradeAgreement.prototype.addTrade = function(partyId, tradeParams, blocknumber){
    const [i, exists] = this.findTradeAgreement(partyId, tradeParams.counterPartyId);
    if(!exists){
        console.error("Trade agreement does not exist");
        return false;
    }

    try {
        this.tradeAgreements[i].addTrade(++this.numTrades, partyId, tradeParams, blocknumber);
    }
    catch(e){
        console.error(e.message);
        return false;
    }
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

MasterTradeAgreement.prototype.getTradeInfoRange = function(partyId, lastIndex, range){
    const trades = [];
    for(const ta of this.tradeAgreements){
        if(ta.party1.id === partyId || ta.party2.id === partyId){
            trades.push(...ta.getAllTradeInfo(partyId));
        }
    }

    const ret = [];
    for(let i = lastIndex; i < range; i++){
        if(i >= trades.length){
            break;
        }
        ret.push(trades[i]);
    }

    return ret;
};

MasterTradeAgreement.prototype.getAllTradeInfo = function(partyId, blocknumber = -1){
    const trades = [];
    for(const ta of this.tradeAgreements){
        if(ta.party1.id === partyId || ta.party2.id === partyId){
            if(blocknumber <= -1){
                trades.push(...ta.getAllTradeInfo(partyId));
            }
            else{
                trades.push(...ta.getLatestTradeInfo(partyId, blocknumber));
            }
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