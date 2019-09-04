const trade = {
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
};

exports.MockTrade = trade;