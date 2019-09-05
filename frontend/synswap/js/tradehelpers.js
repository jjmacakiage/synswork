import axios from "axios";

/**
 * @function createRows
 * @param data
 * @param fields
 * takes data and maps each field to corresponding data input
 */
export const createRows = (data, fields) => {
    const result = [];
    for (let i = 0; i < fields.length; i++) {
        const row = [fields[i], data[i]];
        result.push(row);
    }
    return result;
};

export const generateInitial = (array, values) => {
    let result = {};
    for (let i = 0; i < array.length; i++) {
        result = {...result, [array[i][0]]: values[i]};
    }
    return result;
};

export const doText = text => {
    const newText = text.replace(/([A-Z]+)/g, " $1");
    return newText.charAt(0).toUpperCase() + newText.slice(1)
};

export const pullStuff = (obj, param) => {
    const getKeys = obj => {
        if (typeof obj !== 'object') {
            throw new Error('Invalid JSON');
        }
        let result = [];
        const topKeys = Object.keys(obj);
        for (let i = 0; i < topKeys.length; i++) {
            let topKey = topKeys[i];
            let topEntry = obj[topKey];
            if (typeof topEntry === 'string' || typeof topEntry === 'number') {
                result.push(topKey);
            }
            else if (Array.isArray(topEntry)) {
                let arrayEntry;
                for (arrayEntry in topEntry) {
                    result.push(getKeys(arrayEntry, true));
                }
            }
            else {
                result.push(getKeys(topEntry))
            }
        }
        return result.flat(Infinity);
    };

    const getValues = obj => {
        if (typeof obj !== 'object') {
            throw new Error('Invalid JSON');
        }
        let result = [];
        let topValues = Object.values(obj);
        for (let i = 0; i < topValues.length; i++) {
            let topValue = topValues[i];
            if (typeof topValue === 'string' || typeof topValue === 'number') {
                result.push(topValue);
            }
            else if (Array.isArray(topValue)) {
                let arrayEntry;
                for (arrayEntry in topValue) {
                    result.push(getValues(arrayEntry, true));
                }
            }
            else {
                result.push(getValues(topValue))
            }
        }
        return result.flat(Infinity);
    };
    switch (param) {
        case 'keys':
            return getKeys(obj, false);
        case 'values':
            return getValues(obj, false);
        default:
            return;
    }
}
export const flatValues = (object, parentKey) => {
    let keys = Object.keys(object);
    let result = {};
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let value = object[key];
        let isSecondNest;
        if (typeof value === 'object' && parentKey) isSecondNest = true;

        if (typeof value === 'string' || typeof value === 'number')
            result = { ...result, [parentKey ? doText(key) + '( ' + doText(parentKey) + ' )' : key]: value }


        else if (isSecondNest) {
            console.log(parentKey)
            result = { ...result, ...flatValues(value, key + ' ,' + doText(parentKey))};
        }

        else result = { ...result, ...flatValues(value, key)}
    }

    return result;
};


export const tradeSchema = (schema, values) => {
    const generateSchema = (object, values) => {
        let keys = Object.keys(object);
        let valueCount = 0;
        let result = {};
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let obj = object[key];
            if (typeof obj === 'string' || typeof obj === 'number') {
                result = { ...result, [key]: values[valueCount]};
                valueCount++;
            }
            else {
                result = { ...result, [key]: generateSchema(obj, values.slice(valueCount, valueCount + Object.keys(object).length))};
                valueCount = valueCount + Object.keys(object).length
            }
        }
        return result;
    };
    return generateSchema(schema, values)
};

export const fetchTrades = async (blocknumber, traderid, notifications, dispatch) => {
    const url = "http://localhost:4000/api/updates/" + blocknumber + "?traderid=" + traderid;
    try {
        const response = await axios.get(url);
        if(response.data.success && response.data.trades) {
            dispatch({
                type: 'FETCH_TRADES',
                payload: {
                    trades: response.data.trades,
                    blocknumber: response.data.blocknumber
                }
            });
            const newNotifications = response.data.trades.map((trade) => {
                // TODO: Only new trade notifcations currently, currently cannot amend trades.
                return {message: "Amount: " + trade.amount + " Type: " + trade.tradeType, title: "New trade with " + trade.counterPartyId +" alleged"};
            });
            (newNotifications.length && newNotifications[newNotifications.length - 1] !== notifications[notifications.length - 1]) ?
                dispatch({
                    type: 'ADD_NOTIFICATIONS',
                    payload: newNotifications
                }) : null
        }

    } catch (e) {
        console.log(e);
    }
};

export const initialFetch = async (dispatch) => {
    const url = "http://localhost:4000/api/traders/1/trades";
    try {
        const response = await axios.get(url);
        dispatch({
            type: 'INITIAL_FETCH',
            payload: {
                trades: response.data.trades,
                blocknumber: response.data.blocknumber
            }
        });

    } catch (e) {
        console.log(e);
    }
};

 export const handleSubmit = async params => {
    const url = 'http://localhost:4000/api/traders/1/trades';
    const data = params.values; //tradeSchema(params.schema, Object.values(params.values));
     console.log(data);
    try {
        axios.post(url, {
            data
        })
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response);
                    params.dispatch({ type: 'NEW_TRADE', payload: [response.data.data, data] });
                    return response.data;
                } else {
                    console.log('Trade register failed.', response.status);
                    let error = new Error(response.statusText);
                    error.response = response;
                    throw error
                }
            });
    } catch (error) {
        console.error(
            'You have an error in your code or there are Network issues.',
            error
        );
        return error;
    }
};
