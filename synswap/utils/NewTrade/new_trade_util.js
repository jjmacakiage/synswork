import fetch from 'isomorphic-unfetch';

export default async function fetchCounterpartyList(currentUser) {
    const url = '/js/api/new_trade';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ currentUser })
        });
        if (response.status === 200) {
            const { counterpartyList } = await response.json();
            return { counterpartyList: counterpartyList, status: 'success' };
        } else {
            console.log('Counterparty config fetch failed.');

            let error = new Error(response.statusText);
            error.response = response;
            throw error
        }
    } catch (error) {
        console.error(
            'You have an error in your code or there are Network issues.',
            error
        );
        return error;
    }
}




