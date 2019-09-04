function Org(id, name){
    this.id = id;
    this.name = name;

    this.traders = Array(); // Not used currently.
}

Org.prototype.addTrader = function(trader){
    this.traders.push(trader);
};

exports.Org = Org;