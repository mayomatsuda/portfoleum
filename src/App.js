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
  // The portfolio
  // Respective row, col stores a json record containing NFT information
  // This NFT information is then interpreted by MyPortfolio component
  const [portfolioValues, setPortfolio] = useState([[undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined]])
  // The current square the mouse is hovering over
  const [currentSquare, setCurrentSquare] = useState([undefined, undefined])
  const squareRef = useRef(currentSquare);
  squareRef.current = currentSquare;

  function getUrlAddress() {
    return urlParams.get('address');
  }

  // Add NFT to portfolio
  const addNFT = (newNFT, squareX, squareY, check=true) => {
    const newPortfolio = [...portfolioValues]
    if (check) {
      var pos = checkAdjacent(squareX, squareY, newNFT)
      newNFT['pos'] = pos
    }
    newPortfolio[squareX][squareY] = newNFT
    setPortfolio(newPortfolio)
    setCurrentSquare([undefined, undefined])
  }

  const checkAdjacent = (x, y, nft) => {
    var id = nft['id']
    var tk = nft['tokensymbol']
    if (x > 0 && y < portfolioValues.length - 1 && portfolioValues[x - 1][y + 1] !== undefined) {
      var adjId = portfolioValues[x - 1][y + 1]['id'];
      var adjTk = portfolioValues[x - 1][y + 1]['tokensymbol'];
      if (id === adjId && tk === adjTk)
      {
        var tlnft = Object.assign({}, nft)
        var brnft = Object.assign({}, nft)
        var trnft = Object.assign({}, nft)
        tlnft['pos'] = 'tl'
        addNFT(tlnft, x - 1, y, false)
        brnft['pos'] = 'br'
        addNFT(brnft, x, y + 1, false)
        trnft['pos'] = 'tr'
        addNFT(trnft, x - 1, y + 1, false)
        return 'bl'
      }
    }
    if (y > 0 && x < portfolioValues[0].length - 1 && portfolioValues[x + 1][y - 1] !== undefined) {
      var adjId = portfolioValues[x + 1][y - 1]['id'];
      var adjTk = portfolioValues[x + 1][y - 1]['tokensymbol'];
      if (id === adjId && tk === adjTk)
      {
        console.log("bottomleft");
        addNFT(nft, x + 1, y, false, 'br')
        addNFT(nft, x, y - 1, false, 'tl')
      }
    }
    if (y > 0 && x > 0 && portfolioValues[x - 1][y - 1] !== undefined) {
      var adjId = portfolioValues[x - 1][y - 1]['id'];
      var adjTk = portfolioValues[x - 1][y - 1]['tokensymbol'];
      if (id === adjId && tk === adjTk)
      {
        console.log("topleft");
        addNFT(nft, x - 1, y, false, 'tr')
        addNFT(nft, x, y - 1, false, 'bl')
      }
    }
    if (y < portfolioValues.length - 1 && x < portfolioValues[0].length - 1 && portfolioValues[x + 1][y + 1] !== undefined) {
      var adjId = portfolioValues[x + 1][y + 1]['id'];
      var adjTk = portfolioValues[x + 1][y + 1]['tokensymbol'];
      if (id === adjId && tk === adjTk)
      {
        console.log("bottomright");
        addNFT(nft, x + 1, y, false, 'bl')
        addNFT(nft, x, y + 1, false, 'tr')
      }
    }
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
