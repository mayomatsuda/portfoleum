import './App.css';
import AddWallet from './components/AddWallet'
import Wallet from './components/Wallet'
import { useState } from 'react'
import { useRef } from 'react'
import MyPortfolio from './components/MyPortfolio';
import MyNFTs from './components/MyNFTs';
import { BrowserRouter as Router } from 'react-router-dom'

var checkURL = false;

function App() {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const [nftList, setNFTs] = useState([])
  const [portfolioValues, setPortfolio] = useState([[undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined]])
  const [currentSquare, setCurrentSquare] = useState([undefined, undefined])
  const squareRef = useRef(currentSquare);
  squareRef.current = currentSquare;

  function getUrlAddress() {
    return urlParams.get('address');
  }

  // Add NFT to portfolio
  const addNFT = (newNFT, squareX, squareY) => {
    const newPortfolio = [...portfolioValues]
    newPortfolio[squareX][squareY] = newNFT
    setPortfolio(newPortfolio)
    setCurrentSquare([undefined, undefined])
  }

  // Add wallet
  const updateWallet = async (address) => {
    // urlParams.set('address', address['address'])
    // window.location.search = urlParams;
    setNFTs(await Wallet(address))
  }

  // Add wallet
  async function updateWalletFromURL(address) {
    if (nftList.length > 0) checkURL = true
    setNFTs(await Wallet(address={address}))
  }

  // Handle dragging
  const dragHandler = (e, data, contract, id, tokenname, tokensymbol, url) => {
    // var r = getSquare(parseInt(e['screenX']), parseInt(e['screenY']))
    var nft = {
      'contract': contract,
      'id': id,
      'tokenname': tokenname,
      'tokensymbol': tokensymbol,
      'imageUrl': url
    }
    setTimeout(() => {
      if (squareRef.current[0] !== undefined) {
        addNFT(nft, squareRef.current[0], squareRef.current[1])
      }
    }, 50);
  };

  const mouseEnterHandler = (x, y) => {
    setCurrentSquare([x, y])
  };

  const mouseLeaveHandler = (x, y) => {
    setCurrentSquare([undefined, undefined])
  };

  const noDrag = (e, data) => {

  };

  // Deisable default right-click behaviour
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  // Hide NFTs upon right-click
  const rightClick = (x, y) => {
    if (x !== undefined && y !== undefined) {
      const newPortfolio = portfolioValues
      newPortfolio[x][y] = undefined
      setPortfolio(newPortfolio)
    }
  }

  if (getUrlAddress() !== null && checkURL === false) {
    updateWalletFromURL(getUrlAddress())
  }

  return (
    <Router>
    <div className="App">
      {
        nftList.length === 0 ? (
          <div className='homecontainer'>
          <AddWallet onAdd={updateWallet} />
          </div>
        ) : (
          <div className='rowC'>
            <div className='myportfolio'>
              <MyPortfolio
                portfolioValues={portfolioValues}
                dragHandler={noDrag}
                mouseEnterHandler={mouseEnterHandler}
                mouseLeaveHandler={mouseLeaveHandler}
                rightClickHandler={rightClick}
              />
            </div>
            <div className='mynfts'>
              <MyNFTs thisNftList={nftList} dragHandler={dragHandler} rightClickHandler={rightClick} />
            </div>
          </div>
        )
      }
    </div>
    </Router>
  );
}

export default App;
