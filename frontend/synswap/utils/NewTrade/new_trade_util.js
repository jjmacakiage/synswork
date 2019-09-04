import axios from 'axios';

export default async function fetchCounterpartyList(currentUser, url) {
    try {
        axios.post(url)
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response);
                    dispatch({ type: 'NEW_TRADE', payload: response.data});
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
}




