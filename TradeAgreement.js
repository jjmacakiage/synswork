const Trade = (require('./Trade.js')).Trade;

function TradeAgreement(party1, party2){
    this.party1 = party1;
    this.party2 = party2;

    this.tradesParty1 = [];
    this.tradesParty2 = [];
    this.matchedTrades = [];
}

TradeAgreement.prototype.addTrade = function(tradeId, partyId, tradeParams){
    if(this.party1.id === partyId){
        this.tradesParty1.push(new Trade(tradeId, this.party1.id, this.party2.id, tradeParams));
    }
    else if(this.party2.id === partyId){
        this.tradesParty2.push(new Trade(tradeId, this.party2.id, this.party1.id, tradeParams));
    }
    else{
        // Don't really want to do this but seeing as it's only a mock backend.
        throw Error("Party does not belong to this trade agreement.");
    }
};

TradeAgreement.prototype.getTradeInfo = function(tradeId){
    for(let i = 0; i < this.tradesParty1.length; i++){
        if(this.tradesParty1[i].tradeId === tradeId){
            return this.tradesParty1[i];
        }
    }
    for(let i = 0; i < this.tradesParty2.length; i++){
        if(this.tradesParty2[i].tradeId === tradeId){
            return this.tradesParty2[i];
        }
    }
    for(let i = 0; i < this.matchedTrades.length; i++){
        if(this.matchedTrades[i].tradeId === tradeId){
            return this.matchedTrades[i];
        }
    }

    return {};
};

TradeAgreement.prototype.getAllTradeInfo = function(id){
    const allTradeInfo = [];
    if(id === this.party1.id){
        allTradeInfo.push(...this.tradesParty1);
        allTradeInfo.push(...this.matchedTrades);
    }
    if(id === this.party2.id){
        allTradeInfo.push(...this.tradesParty2);
        allTradeInfo.push(...this.matchedTrades);
    }
    return allTradeInfo;
};

exports.TradeAgreement = TradeAgreement;