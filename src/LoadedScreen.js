import { BrowserRouter as Router, Route, useParams, Switch } from 'react-router-dom'
import MyPortfolio from './components/MyPortfolio';
import MyNFTs from './components/MyNFTs';

const LoadedScreen = (portfolioValues, noDrag, mouseEnterHandler, mouseLeaveHandler, nftList, dragHandler) => {

    return (
        <div className='rowC'>
            <div className='myportfolio'>
                <MyPortfolio
                    portfolioValues={portfolioValues}
                    dragHandler={noDrag}
                    mouseEnterHandler={mouseEnterHandler}
                    mouseLeaveHandler={mouseLeaveHandler}
                />
            </div>
            <div className='mynfts'>
                {
                    nftList !== undefined ? (
                        <MyNFTs thisNftList={nftList} dragHandler={dragHandler} />
                    ) : (
                        <div></div>
                    )
                }
            </div>
        </div>
    )
}

export default LoadedScreen
