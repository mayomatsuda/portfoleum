import Square from "./Square"
import { useState } from 'react'
import NFT from './NFT';

const MyPortfolio = ({ portfolioValues }) => {

    return (
        <div className='myportfolio'>
            <h1>My Portfolio</h1>
            <div className='prow'>
                <div className='pcol'>
                    {portfolioValues[0][0] === undefined ? (
                        <Square x={0} y={0} />
                    ) : (
                        <NFT
                            contract={portfolioValues[0][0]['contract']}
                            id={portfolioValues[0][0]['id']}
                            tokenname={portfolioValues[0][0]['tokenname']}
                            tokensymbol={portfolioValues[0][0]['tokensymbol']}
                        />
                    )}
                </div>
                <div className='pcol'>
                    {portfolioValues[0][1] === undefined ? (
                        <Square x={0} y={1} />
                    ) : (
                        <NFT
                            contract={portfolioValues[0][1]['contract']}
                            id={portfolioValues[0][1]['id']}
                            tokenname={portfolioValues[0][1]['tokenname']}
                            tokensymbol={portfolioValues[0][1]['tokensymbol']}
                        />
                    )}
                </div>
                <div className='pcol'>
                    {portfolioValues[0][2] === undefined ? (
                        <Square x={0} y={2} />
                    ) : (
                        <NFT
                            contract={portfolioValues[0][2]['contract']}
                            id={portfolioValues[0][2]['id']}
                            tokenname={portfolioValues[0][2]['tokenname']}
                            tokensymbol={portfolioValues[0][2]['tokensymbol']}
                        />
                    )}
                </div>
                <div className='pcol'>
                    {portfolioValues[0][3] === undefined ? (
                        <Square x={0} y={3} />
                    ) : (
                        <NFT
                            contract={portfolioValues[0][3]['contract']}
                            id={portfolioValues[0][3]['id']}
                            tokenname={portfolioValues[0][3]['tokenname']}
                            tokensymbol={portfolioValues[0][3]['tokensymbol']}
                        />
                    )}
                </div>
                <div className='pcol'>
                    {portfolioValues[0][4] === undefined ? (
                        <Square x={0} y={4} />
                    ) : (
                        <NFT
                            contract={portfolioValues[0][4]['contract']}
                            id={portfolioValues[0][4]['id']}
                            tokenname={portfolioValues[0][4]['tokenname']}
                            tokensymbol={portfolioValues[0][4]['tokensymbol']}
                        />
                    )}
                </div>
                <div className='pcol'>
                    {portfolioValues[0][5] === undefined ? (
                        <Square x={0} y={5} />
                    ) : (
                        <NFT
                            contract={portfolioValues[0][5]['contract']}
                            id={portfolioValues[0][5]['id']}
                            tokenname={portfolioValues[0][5]['tokenname']}
                            tokensymbol={portfolioValues[0][5]['tokensymbol']}
                        />
                    )}
                </div>
            </div>

            <div className='prow'>
                <div className='pcol'>
                    <Square x={1} y={0} />
                </div>
                <div className='pcol'>
                    <Square x={1} y={1} />
                </div>
                <div className='pcol'>
                    <Square x={1} y={2} />
                </div>
                <div className='pcol'>
                    <Square x={1} y={3} />
                </div>
                <div className='pcol'>
                    <Square x={1} y={4} />
                </div>
                <div className='pcol'>
                    <Square x={1} y={5} />
                </div>
            </div>

            <div className='prow'>
                <div className='pcol'>
                    <Square x={2} y={0} />
                </div>
                <div className='pcol'>
                    <Square x={2} y={1} />
                </div>
                <div className='pcol'>
                    <Square x={2} y={2} />
                </div>
                <div className='pcol'>
                    <Square x={2} y={3} />
                </div>
                <div className='pcol'>
                    <Square x={2} y={4} />
                </div>
                <div className='pcol'>
                    <Square x={2} y={5} />
                </div>
            </div>

            <div className='prow'>
                <div className='pcol'>
                    <Square x={3} y={0} />
                </div>
                <div className='pcol'>
                    <Square x={3} y={1} />
                </div>
                <div className='pcol'>
                    <Square x={3} y={2} />
                </div>
                <div className='pcol'>
                    <Square x={3} y={3} />
                </div>
                <div className='pcol'>
                    <Square x={3} y={4} />
                </div>
                <div className='pcol'>
                    <Square x={3} y={5} />
                </div>
            </div>
        </div>
    )
}

export default MyPortfolio
