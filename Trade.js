const Status = {Unconfirmed: "Unconfirmed", Alleged: "Alleged", Pending: "Pending", Confirmed: "Confirmed",
                Error: "Error", Cancelled: "Cancelled", Withdrawn: "Withdrawn", CancelledAlleged: "CancelledAlleged",
                PendingAlleged: "PendingAlleged"};

function Trade(id, party1, party2){
    this.id = id;
    this.party1 = party1;
    this.party2 = party2;
    this.status = Status.Alleged;
}

exports.Trade = Trade;