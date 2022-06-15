import React from 'react';
import './App.css';
import mint_solana from './mint_solana'

function App() {


  function handleButton() {
    mint_solana()
  }

  return (
    <div className="App">
      <button onClick={handleButton}>Mint</button>
    </div>
  );
}

export default App;
