const Status = {Unconfirmed: "Unconfirmed", Alleged: "Alleged", Pending: "Pending", Confirmed: "Confirmed",
                Error: "Error", Cancelled: "Cancelled", Withdrawn: "Withdrawn", CancelledAlleged: "CancelledAlleged",
                PendingAlleged: "PendingAlleged"};
const Direction = {PayFixed: "PayFixed", PayFloating: "PayFloating"};
const BusDayConvention = {None: "None", ModFollowing: "ModFollowing", Following: "Following", Preceding: "Preceding"};
const BusinessCentre = {GBLO: "GBLO", USNY: "USNY"}; // TODO: Add all business centres
const Currency = {EUR: "EUR", GBP: "GBP", USD: "USD"}; // TODO: Add all currencies
const ReferenceRate = {EURIBOR: "EURIBOR", LIBOR: "LIBOR"}; // TODO: Add all reference rates
const Product = {IRS: "IRS"}; // TODO: What others?
const DayCount = {ACT360: "ACT/360", ACT365FIXED: "ACT/365.FIXED"}; //TODO: Add all day counts

function Trade(tradeId, partyId, counterPartyId, tradeParams){
    this.status = Status.Alleged;

    // Fields 1
    this.tradeId = tradeId;
    this.partyId = partyId;
    this.tradeDate = new Date(tradeParams.tradeDate);
    if(tradeParams.tradeType === Product.IRS){
        this.tradeType = tradeParams.tradeType;
    }
    else{
        throw Error("Invalid product given: " + tradeParams.tradeType);
    }
    this.tradeType = tradeParams.tradeType;
    if(tradeParams.direction === Direction.PayFloating || tradeParams.direction === Direction.PayFixed){
        this.direction = tradeParams.direction;
    }
    else{
        throw Error("Invalid value given for direction of trade: " + tradeParams.direction);
    }
    this.amount = Number(tradeParams.amount);
    if(tradeParams.currency === Currency.EUR || tradeParams.currency === Currency.GBP || tradeParams.currency === Currency.USD){
        this.currency = tradeParams.currency;
    }
    else{
        throw Error("Invalid value given for trade currency: " + tradeParams.currency);
    }
    this.fixedRate = Number(tradeParams.fixedRate);
    this.duration =  tradeParams.duration;

    // Fields 2
    this.counterPartyId = counterPartyId;
    this.terminationDate = TradeDate(tradeParams.terminationDate.date, tradeParams.terminationDate.busDayConvention, tradeParams.terminationDate.businessCentre);
    this.floatingLeg = new FloatingLeg(tradeParams.floatingLeg);
    this.fixedLeg = new FixedLeg(tradeParams.fixedLeg);
}

function FixedLeg(params){
    this.effectiveDate = new TradeDate(params.effectiveDate.date, params.effectiveDate.busDayConvention, params.effectiveDate.businessCentre);
    this.terminationDate = new TradeDate(params.terminationDate.date, params.terminationDate.busDayConvention, params.terminationDate.businessCentre);
    this.paymentTerms = new PaymentTerms(params.paymentTerms.period, params.paymentTerms.dayCountFraction);
}

function FloatingLeg(params){
    if(params.rateReference === ReferenceRate.EURIBOR || params.rateReference === ReferenceRate.LIBOR){
        this.rateReference = params.rateReference;
    }
    else{
        throw Error("Invalid value given for reference rate: " + params.rateReference);
    }
    this.effectiveDate = new TradeDate(params.effectiveDate.date, params.effectiveDate.busDayConvention, params.effectiveDate.businessCentre);
    this.terminationDate = new TradeDate(params.terminationDate.date, params.terminationDate.busDayConvention, params.terminationDate.businessCentre);
    this.paymentTerms = new PaymentTerms(params.paymentTerms.period, params.paymentTerms.dayCountFraction);
    this.fixingDateOffset = {offset: params.fixingDateOffset.offset,
                             busDayConvention: getBusDayConvention(params.fixingDateOffset.busDayConvention),
                             businessCentre: getBusCentre(params.fixingDateOffset.businessCentre)};
}

function PaymentTerms(period, dayCountFraction){
    this.period = period;
    if(dayCountFraction === DayCount.ACT360 || dayCountFraction === DayCount.ACT365FIXED){
        this.dayCountFraction = dayCountFraction;
    }
    else{
        throw Error("Invalid value given for day count fraction: " + dayCountFraction);
    }
}

function TradeDate(date, busDayConvention, businessCentre){
    this.date = new Date(date);
    this.busDayConvention = getBusDayConvention(busDayConvention);
    this.businessCentre = getBusCentre(businessCentre);
}

function getBusDayConvention(bdc){
    if(bdc === BusDayConvention.None || bdc === BusDayConvention.Following || bdc === BusDayConvention.ModFollowing ||
       bdc === BusDayConvention.Preceding){
        return bdc;
    }
    else{
        throw Error("Invalid value given for bus day convention: " + bdc);
    }
}

function getBusCentre(bc){
    if(bc === BusinessCentre.USNY || bc === BusinessCentre.GBLO){
        return bc;
    }
    else{
        throw Error("Invalid value given for business centre: " + bc);
    }
}

exports.Trade = Trade;