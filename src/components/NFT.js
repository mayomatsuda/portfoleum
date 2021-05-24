import Draggable from 'react-draggable';
import { useState } from 'react'

const cheerio = require('cheerio')
const request = require('request')

const NFT = ({ contract, id, tokenname, tokensymbol, dragHandler, url }) => {

    const dragHandlerHere = (e, data) => {
        dragHandler(e, data, contract, id, tokenname, tokensymbol, url)
        return undefined
    }

    return (
        <Draggable onStop={dragHandlerHere} position={{x: 0, y: 0}}>
            <div className='nft'>
                {/* <p>{id}</p> */}
                <img
                    draggable="false"
                    src={url}
                    alt={id}
                    style={{width:'150px', height:'150px'}}
                />
            </div>
        </Draggable>
    )
}

export default NFT
