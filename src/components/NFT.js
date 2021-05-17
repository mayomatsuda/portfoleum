const cheerio = require('cheerio')
const request = require('request')

const NFT = ({ contract, id, tokenname, tokensymbol }) => {
    
    var url;

    function getURL()
    {
        if (tokensymbol == "CK") url = `http://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/${id}.svg`;
    }

    getURL();

    return (
        <div className='nft'>
            {/* <p>{id}</p> */}
            <img
                src={url}
                alt="new"
            />
        </div>
    )
}

export default NFT
