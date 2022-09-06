import './App.css';
import React, { useState } from 'react';
import connectWallet from "./components/connectWallet.js";

function App() {
  let [address, setAddress] = useState("Connect Wallet");
  return (
    <div className='bg-blue-300 h-screen'>
      <div className="connect-button">
        <button className="connect-wallet bg-orange-700 rounded-r-2xl hover:bg-orange-500 px-2 py-2" onClick={connectWallet} setAddress={setAddress}>{address}</button>
      </div>
    </div>
  );
}


export default App;
