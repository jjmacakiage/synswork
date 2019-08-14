const abi = [
    {
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_username",
                "type": "string"
            },
            {
                "name": "_fullname",
                "type": "string"
            },
            {
                "name": "_institution",
                "type": "string"
            },
            {
                "name": "_desk",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "party",
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
        "constant": true,
        "inputs": [
            {
                "name": "i",
                "type": "uint256"
            }
        ],
        "name": "getCounterParty",
        "outputs": [
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
        "constant": false,
        "inputs": [
            {
                "name": "buyer",
                "type": "string"
            },
            {
                "name": "seller",
                "type": "string"
            },
            {
                "name": "productCode",
                "type": "string"
            },
            {
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "addNewTrade",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "getTradeInfo",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
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
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]

exports.abi = abi;