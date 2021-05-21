import NFT from "./NFT"

const MyNFTs = ({ nftList, dragHandler }) => {

    var list1 = [];
    var list2 = [];

    function split()
    {
        for (var i = 0; i < nftList.length; i++)
        {
            if (i%2 === 0) list1.push(nftList[i]);
            else list2.push(nftList[i]);
        }
    }

    split();

    return (
        <div className='mynfts'>
            <h1>My NFTs</h1>
            <>
                <div className='col'>
                    {list1.map((nft, index) => (
                        <NFT key={index}
                            contract={nft['contractAddress']}
                            id={nft['tokenID']}
                            tokenname={nft['tokenName']}
                            tokensymbol={nft['tokenSymbol']}
                            dragHandler={dragHandler}
                        />
                    ))}
                </div>
                <div className='col'>
                    {list2.map((nft, index) => (
                        <NFT key={index}
                            contract={nft['contractAddress']}
                            id={nft['tokenID']}
                            tokenname={nft['tokenName']}
                            tokensymbol={nft['tokenSymbol']}
                            dragHandler={dragHandler}
                        />
                    ))}
                </div>
            </>
        </div>
    )
}

export default MyNFTs
