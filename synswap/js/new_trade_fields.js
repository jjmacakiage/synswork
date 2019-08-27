export function extractByKey(obj, key) {     //Pull all values of specified key from nested JSON
    const arr = [];
    function extract(obj, arr, key) {
        //Recursively search for values of key in JSON tree
        if (obj instanceof Object) {
            let values = obj.values();
            for (let i = 0; i < keys.length; i++) {
                if (values[i] instanceof Object || values[i] instanceof Array) {
                    extract(values[i], arr, key);
                }
                else if (values[i] === key) {
                    arr.append(values[i]);
                }
            }
        }
        else if (obj instanceof Array) {
            for (let i = 0; i < obj.length; i++) {
                extract(obj[i], arr, key);
            }
        }
        return arr
    }
    return extract(obj, arr, key);
}
const base_fields = [
    ['Trade ID', 'text'],
    ['Trade Date', 'date'],
    ['Trade Type', 'select'],
    ['Counterparty', 'select'],
    ['Direction', 'select'],
    ['Amount', 'number'],
    ['Currency', 'select'],
    ['Fixed Rate', 'number'],
    ['Duration', 'select']
];

const extended_fields = [
    ['Counterparty Trade ID', 'text'],
    ['Termination Date (Fixed Leg)', 'date'],
    ['Bus Day Convention', 'select'],
    ['Business Centre', 'select'],
    ['Rate Reference', 'select'],
    ['Period', 'select'],
    ['Day Count Fraction', 'select'],
    ['Fixing Date Offset', 'select'],
    ['Bus Day Convention', 'select'],
    ['Business Centre', 'select'],
    ['Effective Date', 'date'],
    ['Bus Day Convention', 'select'],
    ['Business Centre', 'select'],
    ['Termination Date', 'date'],
    ['Bus Day Convention', 'select'],
    ['Business Centre', 'select'],
    ['Period (Fixed Leg)', 'select'],
    ['Day Count Fraction (Fixed Leg)', 'select'],
    ['Effective Date (Fixed Leg)', 'date'],
    ['Bus Day Convention', 'select'],
    ['Business Centre', 'select'],
    ['Termination Date (Fixed Leg)', 'date'],
    ['Bus Day Convention (Fixed Leg)', 'select'],
    ['Business Centre(Fixed Leg)', 'select'],
];

export const new_trade_fields = () => {
    const base = () => {
        for (let i = 0; i < base_fields.length; i++) {
            base_fields[i].push('0');
        }
        return base_fields;
    };

    const extended = () => {
        for (let i = 0; i < extended_fields.length; i++) {
            extended_fields[i].push('1');
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
    "terminationDate": {"date": "2020-08-02",
        "busDayConvention": "ModFollowing",
        "businessCentre": "GBLO"},
    "floatingLeg": {"rateReference": "EURIBOR",
        "effectiveDate": {"date": "2019-08-02",
            "busDayConvention": "ModFollowing",
            "businessCentre": "GBLO"},
        "terminationDate": {"date": "2020-08-02",
            "busDayConvention": "ModFollowing",
            "businessCentre": "GBLO"},
        "paymentTerms": {"period": "6M", "dayCountFraction": "ACT/360"},
        "fixingDateOffset": {"offset": "-2D",
            "busDayConvention": "ModFollowing",
            "businessCentre": "GBLO"}},
    "fixedLeg": {
        "effectiveDate": {"date": "2019-08-02",
            "busDayConvention": "ModFollowing",
            "businessCentre": "GBLO"},
        "terminationDate": {"date": "2019-08-02",
            "busDayConvention": "ModFollowing",
            "businessCentre": "GBLO"},
        "paymentTerms": {"period": "6M", "dayCountFraction": "ACT/360"}}
}



