import NFT from "./NFT"
import { useState } from 'react'
import $, { getJSON, timers } from 'jquery'
import ClipLoader from "react-spinners/ClipLoader";

var started = false;
var k = 0;

const MyNFTs = ({ thisNftList, dragHandler }) => {

    var openseaApiUrl = "https://api.opensea.io/api/v1/asset/";
    const [nftList, updateList] = useState([...thisNftList])
    const [loaded, setLoaded] = useState(false)

    const timer = ms => new Promise(res => setTimeout(res, ms))

    async function getImages() {
        for (var i = 0; i < nftList.length; i++) {
            k++;
            if (nftList[i] !== undefined) {
                var thisUrl = openseaApiUrl + nftList[i]['contractAddress'] + "/" + nftList[i]['tokenID']
                $.getJSON(thisUrl, function (data) {
                    var newList = [...nftList]
                    newList[i]['imageUrl'] = data['image_url']
                    updateList(newList)
                })
                    .fail(function () {
                        console.log("Could not load image.");
                        var newList = [...nftList]
                        updateList(newList)
                    });
            }
            await timer(1000)
        }
    }

    if (started === false) {
        getImages()
        started = true
    }

    var list1 = [];
    var list2 = [];
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(4);

    function split() {
        if (k === nftList.length - 1 && loaded === false) setLoaded(true)
        for (var i = 0; i < nftList.length; i++) {
            if (i % 2 === 0) list1.push(nftList[i]);
            else list2.push(nftList[i]);
        }
    }

    const nextpage = (e) => {
        e.preventDefault()
        if (list1.slice(index1 + 4, index2 + 4).length + list2.slice(index1 + 4, index2 + 4).length > 0) {
            setIndex1(index1 + 4);
            setIndex2(index2 + 4);
        }
    }

    const lastpage = (e) => {
        e.preventDefault()
        if (index1 !== 0) {
            setIndex1(index1 - 4);
            setIndex2(index2 - 4);
        }
    }

    split()

    return (
        <div>
            <h1>My NFTs</h1>
            {loaded === false ? (
                <>
                    Loading {nftList.length} NFTs<br /><br />
                    <ClipLoader size={50} />
                </>

            ) : (
                <>
                    <div className='col'>
                        {list1.slice(index1, index2).map((nft, index) => (
                            <NFT key={index}
                                contract={nft['contractAddress']}
                                id={nft['tokenID']}
                                tokenname={nft['tokenName']}
                                tokensymbol={nft['tokenSymbol']}
                                url={nft['imageUrl']}
                                dragHandler={dragHandler}
                            />
                        ))}
                    </div>
                    <div className='col'>
                        {list2.slice(index1, index2).map((nft, index) => (
                            <NFT key={index}
                                contract={nft['contractAddress']}
                                id={nft['tokenID']}
                                tokenname={nft['tokenName']}
                                tokensymbol={nft['tokenSymbol']}
                                url={nft['imageUrl']}
                                dragHandler={dragHandler}
                            />
                        ))}
                    </div>
                </>
            )}
            <div className="rowC">
                <form onSubmit={lastpage} className="arrow">
                    <input type='submit' value='<' className='btn btn-block' />
                </form>
                <form onSubmit={nextpage} className="arrow">
                    <input type='submit' value='>' className='btn btn-block' />
                </form>
            </div>
        </div>
    )
}

export default MyNFTs
