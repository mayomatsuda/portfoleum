const Wallet = async ({ address }) => {
    var Web3 = require('web3');
    var apiUrl = "https://mainnet.infura.io/v3/a7baf100c77848de8fd81fec9c2a0033";
    var web3 = new Web3(apiUrl);
    var abi = [
        {
            'inputs': [{ 'internalType': 'address', 'name': 'owner', 'type': 'address' }],
            'name': 'balanceOf',
            'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
            'payable': false, 'stateMutability': 'view', 'type': 'function', 'constant': true
        },
        {
            'inputs': [],
            'name': 'name',
            'outputs': [{ 'internalType': 'string', 'name': '', 'type': 'string' }],
            'stateMutability': 'view', 'type': 'function', 'constant': true
        },
        {
            'inputs': [{ 'internalType': 'uint256', 'name': 'tokenId', 'type': 'uint256' }],
            'name': 'ownerOf',
            'outputs': [{ 'internalType': 'address', 'name': '', 'type': 'address' }],
            'payable': false, 'stateMutability': 'view', 'type': 'function', 'constant': true
        },
        {
            'inputs': [],
            'name': 'symbol',
            'outputs': [{ 'internalType': 'string', 'name': '', 'type': 'string' }],
            'stateMutability': 'view', 'type': 'function', 'constant': true
        },
        {
            "constant": true,
            "inputs": [{ "name": "_tokenId", "type": "uint256" }],
            "name": "tokenMetadata",
            "outputs": [{ "name": "_infoUrl", "type": "string" }],
            "payable": false, "stateMutability": "view", "type": "function"
        },
    ]

    var url = `https://api.etherscan.io/api?module=account&action=tokennfttx&address=${address}&startblock=0&endblock=999999999&sort=asc&apikey=Y79P7CN6NZIP6JPNU4MVFQQDIXF1F8FNIW`
    var data;

    var cryptoKitties = "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d";

    async function fetchAsync() {
        let response = await fetch(url);
        let data = await response.json();
        return data['result'];
    }

    async function getToTransactions(data) {
        var toTransactions = [];
        for (var element in data) {
            if (data[element]['to'].toUpperCase() === address.toUpperCase())
                toTransactions.push(
                    {
                        'contractAddress': data[element]['contractAddress'],
                        'tokenID': data[element]['tokenID'],
                        'tokenName': data[element]['tokenName'],
                        'tokenSymbol': data[element]['tokenSymbol'],
                        'from': data[element]['from']
                    }
                );
        }
        return toTransactions;
    }

    async function getFromTransactions(data) {
        var fromTransactions = [];
        for (var element in data) {
            if (data[element]['from'].toUpperCase() === address.toUpperCase())
            fromTransactions.push(
                {
                    'contractAddress': data[element]['contractAddress'],
                    'tokenID': data[element]['tokenID'],
                    'tokenName': data[element]['tokenName'],
                    'tokenSymbol': data[element]['tokenSymbol'],
                    'to': data[element]['to']
                }
            );
        }
        return fromTransactions;
    }

    // async function verifyToTransactions(adr, to) {
    //     var contract = new web3.eth.Contract(abi, adr);
    //     var nftList = [];
    //     for (var element in to) {
    //         if (await verify(to[element]['tokenID'], contract) === "true")
    //             nftList.push(to[element]);
    //     }
    //     return nftList;
    // }

    async function verify(id, contract) {
        var owner = await contract.methods.ownerOf(id).call();
        if (String(owner).toUpperCase() === String(address).toUpperCase())
            return "true";
        else
            return "false";
    }

    
    data = await fetchAsync(url);
    var to = await getToTransactions(data);
    var from = await getFromTransactions(data);

    function isIn(x) {
        for (var element in from) {
            if (x['tokenID'] != from[element]['tokenID']) continue;
            else return false;
        }
        return true;
    }
    console.log(to);
    return await (to.filter(x => isIn(x)));
    // return await verifyToTransactions(cryptoKitties);
}

export default Wallet
