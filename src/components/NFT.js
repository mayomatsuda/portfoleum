import Draggable from 'react-draggable';

const NFT = ({ contract, id, tokenname, tokensymbol, dragHandler, url, rightClickHandler, x, y }) => {

    const dragHandlerHere = (e, data) => {
        dragHandler(e, data, contract, id, tokenname, tokensymbol, url)
        return undefined
    }

    const rightClickHandlerHere = (e) => {
        rightClickHandler(x, y)
    }

    return (
        <Draggable onStop={dragHandlerHere} position={{x: 0, y: 0}}>
            <div className='nft' onContextMenu={rightClickHandlerHere}>
                {/* <p>{id}</p> */}
                <img
                    draggable="false"
                    src={url}
                    alt={tokensymbol + ": " + id}
                    style={{width:'150px', height:'150px'}}
                />
            </div>
        </Draggable>
    )
}

export default NFT
