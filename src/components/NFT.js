import Draggable from 'react-draggable';

const cheerio = require('cheerio')
const request = require('request')

const NFT = ({ contract, id, tokenname, tokensymbol, dragHandler }) => {
    
    var url;

    function getURL()
    {
        if (tokensymbol == "CK") url = `http://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/${id}.svg`;
    }

    const dragHandlerHere = (e, data) => {
        dragHandler(e, data, contract, id, tokenname, tokensymbol)
    }

    getURL();

    return (
        <Draggable onStop={dragHandlerHere}>
            <div className='nft'>
                {/* <p>{id}</p> */}
                <img
                    draggable="false"
                    src={url}
                    alt="new"
                />
            </div>
        </Draggable>
    )
}

export default NFT
