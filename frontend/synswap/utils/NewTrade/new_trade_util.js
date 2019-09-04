import axios from 'axios';

export default async function fetchCounterpartyList(currentUser) {
    // TODO: USING FIXED PARTY ID, SHOULD IT ASK FOR USER ID INSTEAD?
    const url = 'http://localhost:4000/api/parties/1/counterparties';
    let data = {};
    await axios.get(url)
        .then((response) => {
            if (response.status === 200) {
                data = response.data;
            } else {
                let error = new Error(response.statusText);
                error.response = response;
                throw error
            }
        })
        .catch((error) => {
            console.error(
                'Fetching counterparties failed. You have an error in your code or there are Network issues.',
                error
            );
        });

    return data;
}