exports.Status = {Unconfirmed: "Unconfirmed", Alleged: "Alleged", Pending: "Pending", Confirmed: "Confirmed",
    Error: "Error", Cancelled: "Cancelled", Withdrawn: "Withdrawn", CancelledAlleged: "CancelledAlleged",
    PendingAlleged: "PendingAlleged"};
exports.Direction = {PayFixed: "PayFixed", PayFloating: "PayFloating"};
exports.BusDayConvention = {None: "None", ModFollowing: "ModFollowing", Following: "Following", Preceding: "Preceding"};
exports.BusinessCentre = {GBLO: "GBLO", USNY: "USNY"}; // TODO: Add all business centres
exports.Currency = {EUR: "EUR", GBP: "GBP", USD: "USD"}; // TODO: Add all currencies
exports.ReferenceRate = {EURIBOR: "EURIBOR", LIBOR: "LIBOR"}; // TODO: Add all reference rates
exports.Product = {IRS: "IRS"}; // TODO: What others?
exports.DayCount = {ACT360: "ACT/360", ACT365FIXED: "ACT/365.FIXED"}; //TODO: Add all day counts