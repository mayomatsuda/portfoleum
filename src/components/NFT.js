import Draggable from 'react-draggable';

const NFT = ({ contract, id, tokenname, tokensymbol, dragHandler, url, rightClickHandler, x, y, height='150px', width='150px', pos='def' }) => {

    const dragHandlerHere = (e, data) => {
        dragHandler(e, data, contract, id, tokenname, tokensymbol, url)
        return undefined
    }

    const rightClickHandlerHere = (e) => {
        rightClickHandler(x, y)
    }

    var left = 0
    var right = false
    var bottom = false
    if (pos !== 'def') {
        height='300px'
        width='300px'
    }
    if (pos === 'tl') {
        left = 0
        right = false
    }
    if (pos === 'tr') {
        left = false
        right = 0
    }
    if (pos === 'bl') {
        left = 0
        right = false
        bottom = 0
    }
    if (pos === 'br') {
        left = false
        right = 0
        bottom = 0
    }

    return (
        <Draggable onStop={dragHandlerHere} position={{x: 0, y: 0}}>
            <div className='nft' onContextMenu={rightClickHandlerHere} style={{width:'150px',height:'150px',overflow:'hidden'}}>
                <img
                    draggable="false"
                    src={url}
                    alt={tokensymbol + ": " + id}
                    style={{width:width, height:height, position:'absolute', left:left, right:right, bottom:bottom }}
                />
            </div>
        </Draggable>
    )
}

export default NFT
