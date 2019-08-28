function extractByKey(obj, key) {
    if (obj[key]) {
        return obj[key];
    }
    else {
        var result;
        let keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            if (Object.keys(obj[keys[i]]).includes(key)) {
                result = obj[keys[i]][key];
            }
        }
        if (result) return result;
        else return "Not Found";
    }
}

//FOR ALL THE 'SELECT' TAGS, APPEND A LIST OF OPTIONS TO THE END OF THE LIST
const base_fields = [
    ['Trade Date', 'date'],
    ['Trade Type', 'select', ['IRS']],
    ['Direction', 'select', ['PayFixed']],
    ['Amount', 'number'],
    ['Currency', 'select', ['GBP']],
    ['Fixed Rate', 'number'],
    ['Duration', 'select', ['5Y']],
    ['Counterparty ID', 'select', [1, 2]],
    ['Termination Date', 'date'],
    ['Bus Day Convention', 'select', ['ModFollowing']],
    ['Business Centre', 'select', ['GBLO']],
];

const extended_fields = [
    //Floating Leg
    ['Rate Reference', 'select', ['EURIBOR']],

    ['Effective Date (Floating)', 'date'],
    ['Bus Day Convention (Effective, Floating)', 'select', ['ModFollowing']],
    ['Business Centre (Effective, Floating)', 'select', ['GBLO']],

    ['Termination Date (Floating)', 'date'],
    ['Bus Day Convention (Termination, Floating)', 'select', ['ModFollowing']],
    ['Business Centre (Termination, Floating)', 'select', ['GBLO']],

    ['Period (Floating)', 'select', ['6M']],
    ['Day Count Fraction (Floating)', 'select', ['ACT/360']],

    ['Fixing Date Offset (Floating)', 'select', ['-2D']],
    ['Bus Day Convention (Floating)', 'select', ['ModFollowing']],
    ['Business Centre (Floating)', 'select', ['GBLO']],

    //Fixed Leg
    ['Effective Date (Fixed)', 'date'],
    ['Bus Day Convention (Effective, Fixed)', 'select', ['ModFollowing']],
    ['Business Centre (Effective, Fixed)', 'select', ['GBLO']],

    ['Termination Date (Fixed)', 'date'],
    ['Bus Day Convention (Termination, Fixed)', 'select', ['ModFollowing']],
    ['Business Centre (Termination, Fixed)', 'select', ['GBLO']],

    ['Period (Fixed)', 'select', ['6M']],
    ['Day Count Fraction (Fixed)', 'select', ['ACT/360']],
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



