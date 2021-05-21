import './App.css';
import AddWallet from './components/AddWallet'
import Wallet from './components/Wallet'
import { useState } from 'react'
import MyPortfolio from './components/MyPortfolio';
import MyNFTs from './components/MyNFTs';
import TempButton from './components/TempButton';
import NFT from './components/NFT';

function App() {

  const [nftList, setNFTs] = useState([])
  const [portfolioValues, setPortfolio] = useState([[undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined]])

  // Add NFT to portfolio
  const addNFT = (newNFT, squareX, squareY) => {
    const newPortfolio = [...portfolioValues]
    newPortfolio[squareX][squareY] = newNFT
    setPortfolio(newPortfolio)
    console.log(portfolioValues)
  }

  // Add wallet
  const updateWallet = async (address) => {
    setNFTs(await Wallet(address))
  }

  // Handle dragging
  const dragHandler = (e, data, contract, id, tokenname, tokensymbol) => {
    var r = getSquare(parseInt(e['screenX']), parseInt(e['screenY']))
    var nft = {
      'contract': contract,
      'id': id,
      'tokenname': tokenname,
      'tokensymbol': tokensymbol
    }
    if (r !== undefined) {
      addNFT(nft, parseInt(r[0]), parseInt(r[1]))
    }
  };

  function getSquare(x, y) {
    if (1570 < x && x < 1670) {
      if (-207 < y && y < -109) return [0, 0];
      if (-51 < y && y < 48) return [0, 1];
      if (107 < y && y < 205) return [0, 2];
      if (264 < y && y < 362) return [0, 3];
    }
    if (1720 < x && x < 1820) {
      if (-207 < y && y < -109) return [1, 0];
      if (-51 < y && y < 48) return [1, 1];
      if (107 < y && y < 205) return [1, 2];
      if (264 < y && y < 362) return [1, 3];
    }
    if (1870 < x && x < 1970) {
      if (-207 < y && y < -109) return [2, 0];
      if (-51 < y && y < 48) return [2, 1];
      if (107 < y && y < 205) return [2, 2];
      if (264 < y && y < 362) return [2, 3];
    }
    if (2020 < x && x < 2120) {
      if (-207 < y && y < -109) return [3, 0];
      if (-51 < y && y < 48) return [3, 1];
      if (107 < y && y < 205) return [3, 2];
      if (264 < y && y < 362) return [3, 3];
    }
    if (2170 < x && x < 2270) {
      if (-207 < y && y < -109) return [4, 0];
      if (-51 < y && y < 48) return [4, 1];
      if (107 < y && y < 205) return [4, 2];
      if (264 < y && y < 362) return [4, 3];
    }
    if (2320 < x && x < 2420) {
      if (-207 < y && y < -109) return [5, 0];
      if (-51 < y && y < 48) return [5, 1];
      if (107 < y && y < 205) return [5, 2];
      if (264 < y && y < 362) return [5, 3];
    }
  }

  //// BACKLOG
  // Click and drag over a square to replace it (i.e. update portfolioValues)

  return (
    <div className="App">
      {
        nftList.length === 0 ? (
          <AddWallet onAdd={updateWallet} />
        ) : (
          <div className='rowC'>
            <MyPortfolio portfolioValues={portfolioValues} />
            <MyNFTs nftList={nftList} dragHandler={dragHandler} />
          </div>
        )
      }
    </div>
  );
}

export default App;
