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
