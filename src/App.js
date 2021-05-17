import './App.css';
import AddWallet from './components/AddWallet'
import Wallet from './components/Wallet'
import { useState } from 'react'
import MyPortfolio from './components/MyPortfolio';
import MyNFTs from './components/MyNFTs';
import TempButton from './components/TempButton';

function App() {

  const [nftList, setNFTs] = useState([])
  const [portfolioValues, setPortfolio] = useState([[]])

  // Add NFT to portfolio
  const addNFT = (newNFT, squareX, squareY) => {
      const newPortfolio = [...portfolioValues]
      newPortfolio[squareX][squareY] = newNFT
      setPortfolio(newPortfolio)
  }

  // Add wallet
  const updateWallet = async (address) => {
    setNFTs( await Wallet(address) )
  }

  //// BACKLOG
  // Remove 'from' transactions from nftList
  // Click and drag over a square to replace it (i.e. update portfolioValues)

  return (
    <div className="App">
      {
        nftList.length === 0 ? (
          <AddWallet onAdd={ updateWallet } />
        ) : (
          <div className='rowC'>
            <MyPortfolio portfolioValues={portfolioValues}/>
            <MyNFTs nftList={nftList}/>
            <TempButton onAdd={addNFT}/>
          </div>
        )
      }
     </div>
  );
}

export default App;
