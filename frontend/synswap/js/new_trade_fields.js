const {Direction, BusDayConvention, BusinessCentre, Currency, ReferenceRate, Product, DayCount} = require('../../../common/TradeFields');

//FOR ALL THE 'SELECT' TAGS, APPEND A LIST OF OPTIONS TO THE END OF THE LIST
const base_fields = [
    ['Trade Date', 'date'],
    ['Trade Type', 'select', Object.values(Product)],
    ['Direction', 'select', Object.values(Direction)],
    ['Amount', 'number'],
    ['Currency', 'select', Object.values(Currency)],
    ['Fixed Rate', 'number'],
    ['Duration', 'select', ['5Y']],
];

const extended_fields = [
    ['Counterparty ID', 'select', [1, 2]],
    ['Termination Date', 'date'],
    ['Bus Day Convention', 'select', Object.values(BusDayConvention)],
    ['Business Centre', 'select', Object.values(BusinessCentre)],
    //Floating Leg
    ['Rate Reference', 'select', Object.values(ReferenceRate)],

    ['Effective Date (Floating)', 'date'],
    ['Bus Day Convention (Effective, Floating)', 'select', Object.values(BusDayConvention)],
    ['Business Centre (Effective, Floating)', 'select', Object.values(BusinessCentre)],

    ['Termination Date (Floating)', 'date'],
    ['Bus Day Convention (Termination, Floating)', 'select', Object.values(BusDayConvention)],
    ['Business Centre (Termination, Floating)', 'select', Object.values(BusinessCentre)],

    ['Period (Floating)', 'select', ['6M']],
    ['Day Count Fraction (Floating)', 'select', Object.values(DayCount)],

    ['Fixing Date Offset (Floating)', 'select', ['-2D']],
    ['Bus Day Convention (Floating)', 'select', Object.values(BusDayConvention)],
    ['Business Centre (Floating)', 'select', Object.values(BusinessCentre)],

    //Fixed Leg
    ['Effective Date (Fixed)', 'date'],
    ['Bus Day Convention (Effective, Fixed)', 'select', Object.values(BusDayConvention)],
    ['Business Centre (Effective, Fixed)', 'select', Object.values(BusinessCentre)],

    ['Termination Date (Fixed)', 'date'],
    ['Bus Day Convention (Termination, Fixed)', 'select', Object.values(BusDayConvention)],
    ['Business Centre (Termination, Fixed)', 'select', Object.values(BusinessCentre)],

    ['Period (Fixed)', 'select', ['6M']],
    ['Day Count Fraction (Fixed)', 'select', Object.values(DayCount)],
];




export const new_trade_fields = () => {
    const base = () => {
        for (let i = 0; i < base_fields.length; i++) {
            base_fields[i].splice(2, 0, '0');
        }
        return base_fields;
    };

    const extended = () => {
        for (let i = 0; i < extended_fields.length; i++) {
            extended_fields[i].splice(2, 0,'1');
        }
        return extended_fields;
    };

    return base().concat(extended());
};

export const IRS = {
    "tradeDate": "2019-08-02",
    "tradeType": "IRS",
    "direction": "PayFixed",
    "amount": 100000,
    "currency": "GBP",
    "fixedRate": 0.1,
    "duration": "5Y",
    "counterPartyId": 2,
    "terminationDate": {
        "date": "2020-08-02",
        "busDayConvention": "ModFollowing",
        "businessCentre": "GBLO"
    },
    "floatingLeg": {
        "rateReference": "EURIBOR",
        "effectiveDate": {
            "date": "2019-08-02",
            "busDayConvention": "ModFollowing",
            "businessCentre": "GBLO"
        },
        "terminationDate": {
            "date": "2020-08-02",
            "busDayConvention": "ModFollowing",
            "businessCentre": "GBLO"
        },
        "paymentTerms": {
            "period": "6M",
            "dayCountFraction": "ACT/360"
        },
        "fixingDateOffset": {"offset": "-2D",
            "busDayConvention": "ModFollowing",
            "businessCentre": "GBLO"}
    },
    "fixedLeg": {
        "effectiveDate": {
            "date": "2019-08-02",
            "busDayConvention": "ModFollowing",
            "businessCentre": "GBLO"
        },
        "terminationDate": {
            "date": "2019-08-02",
            "busDayConvention": "ModFollowing",
            "businessCentre": "GBLO"
        },
        "paymentTerms": {
            "period": "6M",
            "dayCountFraction": "ACT/360"
        }
    }
};



