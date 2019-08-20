const abi = [
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "id",
                "type": "int256"
            }
        ],
        "name": "getCounterParties",
        "outputs": [
            {
                "name": "",
                "type": "bytes"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "counterParty",
                "type": "string"
            }
        ],
        "name": "addCounterParty",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "idParty1",
                "type": "int256"
            },
            {
                "name": "idParty2",
                "type": "int256"
            }
        ],
        "name": "addTradeAgreement",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "idParty1",
                "type": "int256"
            },
            {
                "name": "idParty2",
                "type": "int256"
            }
        ],
        "name": "addTrade",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "tradeId",
                "type": "int256"
            },
            {
                "name": "idParty",
                "type": "int256"
            }
        ],
        "name": "getTradeInfo",
        "outputs": [
            {
                "name": "",
                "type": "int256"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "id",
                "type": "int256"
            }
        ],
        "name": "getAllTradeInfo",
        "outputs": [
            {
                "name": "",
                "type": "int256[]"
            },
            {
                "name": "",
                "type": "string[]"
            },
            {
                "name": "",
                "type": "string[]"
            },
            {
                "name": "",
                "type": "string[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

exports.abi = abi;