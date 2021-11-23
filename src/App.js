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

  const [groupID, setGroupID] = useState(0)

  function getUrlAddress() {
    return urlParams.get('address');
  }

  // Add NFT to portfolio
  const addNFT = (newNFT, squareX, squareY, check=true, adjOnly=false) => {
    const newPortfolio = [...portfolioValues]
    var pos;
    if (check && adjOnly) {
      pos = checkAdjacent(squareX, squareY, newNFT)
      if (pos !== undefined) {
        newNFT['locked'] = true
        newNFT['group'] = groupID
        console.log(groupID - 1)
      } else {
        newNFT['locked'] = false
      }
      newNFT['pos'] = pos
    }
    // If only checking for adjacent cells, but not returning an adjacent cell
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
      var adjLocked = portfolioValues[x - 1][y + 1]['locked'];
      //expanding down (x + 1) and left (y - 1)
      if (id === adjId && tk === adjTk && adjLocked != true)
      {
        var tlnft = Object.assign({}, nft)
        var brnft = Object.assign({}, nft)
        var trnft = Object.assign({}, nft)
        tlnft['pos'] = 'tl'
        tlnft['locked'] = true
        tlnft['group'] = groupID
        addNFT(tlnft, x - 1, y, false)
        brnft['pos'] = 'br'
        brnft['locked'] = true
        brnft['group'] = groupID
        addNFT(brnft, x, y + 1, false)
        trnft['pos'] = 'tr'
        trnft['locked'] = true
        trnft['group'] = groupID
        addNFT(trnft, x - 1, y + 1, false)
        setGroupID(groupID + 1)
        return 'bl'
      }
    }
    if (y > 0 && x < portfolioValues[0].length - 1 && portfolioValues[x + 1][y - 1] !== undefined) {
      var adjId = portfolioValues[x + 1][y - 1]['id'];
      var adjTk = portfolioValues[x + 1][y - 1]['tokensymbol'];
      var adjLocked = portfolioValues[x + 1][y - 1]['locked'];
      //expanding up (x - 1) and right (y + 1)
      if (id === adjId && tk === adjTk && adjLocked != true)
      {
        var tlnft = Object.assign({}, nft)
        var brnft = Object.assign({}, nft)
        var blnft = Object.assign({}, nft)
        tlnft['pos'] = 'tl'
        tlnft['locked'] = true
        tlnft['group'] = groupID
        addNFT(tlnft, x, y - 1, false)
        brnft['pos'] = 'br'
        brnft['locked'] = true
        brnft['group'] = groupID
        addNFT(brnft, x + 1, y, false)
        blnft['pos'] = 'bl'
        blnft['locked'] = true
        blnft['group'] = groupID
        addNFT(blnft, x + 1, y - 1, false)
        setGroupID(groupID + 1)
        return 'tr'
      }
    }
    if (y > 0 && x > 0 && portfolioValues[x - 1][y - 1] !== undefined) {
      var adjId = portfolioValues[x - 1][y - 1]['id'];
      var adjTk = portfolioValues[x - 1][y - 1]['tokensymbol'];
      var adjLocked = portfolioValues[x - 1][y - 1]['locked'];
      //expanding down (x + 1) and right (y + 1)
      if (id === adjId && tk === adjTk && adjLocked != true)
      {
        var trnft = Object.assign({}, nft)
        var tlnft = Object.assign({}, nft)
        var blnft = Object.assign({}, nft)
        trnft['pos'] = 'tr'
        trnft['locked'] = true
        trnft['group'] = groupID
        addNFT(trnft, x - 1, y, false)
        tlnft['pos'] = 'tl'
        tlnft['locked'] = true
        tlnft['group'] = groupID
        addNFT(tlnft, x - 1, y - 1, false)
        blnft['pos'] = 'bl'
        blnft['locked'] = true
        blnft['group'] = groupID
        addNFT(blnft, x, y - 1, false)
        setGroupID(groupID + 1)
        return 'br'
      }
    }
    if (y < portfolioValues.length - 1 && x < portfolioValues[0].length - 1 && portfolioValues[x + 1][y + 1] !== undefined) {
      var adjId = portfolioValues[x + 1][y + 1]['id'];
      var adjTk = portfolioValues[x + 1][y + 1]['tokensymbol'];
      var adjLocked = portfolioValues[x + 1][y + 1]['locked'];
      //expanding up (x - 1) and left (y - 1)
      if (id === adjId && tk === adjTk && adjLocked != true)
      {
        var trnft = Object.assign({}, nft)
        var brnft = Object.assign({}, nft)
        var blnft = Object.assign({}, nft)
        trnft['pos'] = 'tr'
        trnft['locked'] = true
        trnft['group'] = groupID
        addNFT(trnft, x, y + 1, false)
        brnft['pos'] = 'br'
        brnft['locked'] = true
        brnft['group'] = groupID
        addNFT(brnft, x + 1, y + 1, false)
        blnft['pos'] = 'bl'
        blnft['locked'] = true
        blnft['group'] = groupID
        addNFT(blnft, x + 1, y, false)
        setGroupID(groupID + 1)
        return 'tl'
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

  const noDrag = (e, data, contract, id, tokenname, tokensymbol, url) => {
    var nft = {
      'contract': contract,
      'id': id,
      'tokenname': tokenname,
      'tokensymbol': tokensymbol,
      'imageUrl': url
    }
    setTimeout(() => {
      if (squareRef.current[0] !== undefined) {
        addNFT(nft, squareRef.current[0], squareRef.current[1], true, true)
      }
    }, 50);
  };

  // Disable default right-click behaviour
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  // Hide NFTs upon right-click
  const rightClick = (x, y) => {
    if (x !== undefined && y !== undefined) {
      const newPortfolio = portfolioValues
      // Delete all with matching groupID if groupID is defined
      for (var i = 0; i < newPortfolio.length; i++) { 
        for (var j = 0; j < newPortfolio[i].length; j++) {
          if (i == x && j == y) continue
          if (newPortfolio[i][j] !== undefined && newPortfolio[i][j]['group'] == newPortfolio[x][y]['group']) newPortfolio[i][j] = undefined
        }
      }
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
