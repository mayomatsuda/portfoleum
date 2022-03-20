const Wallet = async ({ address }) => {
    var apikey = process.env.REACT_APP_ETHERSCAN_API_KEY;
    var url = `https://api.etherscan.io/api?module=account&action=tokennfttx&address=${address}&startblock=0&endblock=999999999&sort=asc&apikey=${apikey}`
    var data;

    async function fetchAsync() {
        console.log("Fetching")
        let response = await fetch(url);
        let datar = await response.json();
        return datar['result'];
    }

    async function getToTransactions(data) {
        var toTransactions = [];
        for (var element in data) {
            if (data[element]['to'] !== undefined) {
                if (data[element]['to'].toUpperCase() === address.toUpperCase())
                    toTransactions.push(
                        {
                            'contractAddress': data[element]['contractAddress'],
                            'tokenID': data[element]['tokenID'],
                            'tokenName': data[element]['tokenName'],
                            'tokenSymbol': data[element]['tokenSymbol'],
                            'from': data[element]['from'],
                            'imageUrl': undefined,
                        }
                    );
            }
        }
        return toTransactions;
    }

    async function getFromTransactions(data) {
        var fromTransactions = [];
        for (var element in data) {
            if (data[element]['to'] !== undefined) {
                if (data[element]['from'].toUpperCase() === address.toUpperCase())
                    fromTransactions.push(
                        {
                            'contractAddress': data[element]['contractAddress'],
                            'tokenID': data[element]['tokenID'],
                            'tokenName': data[element]['tokenName'],
                            'tokenSymbol': data[element]['tokenSymbol'],
                            'to': data[element]['to'],
                            'imageUrl': undefined,
                        }
                    );
            }
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

    // async function verify(id, contract) {
    //     var owner = await contract.methods.ownerOf(id).call();
    //     if (String(owner).toUpperCase() === String(address).toUpperCase())
    //         return "true";
    //     else
    //         return "false";
    // }

    
    data = await fetchAsync(url);
    var to = await getToTransactions(data);
    var from = await getFromTransactions(data);

    function isIn(x) {
        for (var element in from) {
            if (x['tokenID'] !== from[element]['tokenID']) continue;
            else return false;
        }
        return true;
    }

    return await (to.filter(x => isIn(x)));
    // return await verifyToTransactions(cryptoKitties);
}

export default Wallet
