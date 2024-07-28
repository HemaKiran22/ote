// src/App.js
import React from 'react';
import './App.css';
import Header from './HomePage/Header';
import Introduction from './HomePage/Introduction';
import Features from './HomePage/Features';
import JoinCommunity from './HomePage/JoinCommunity';
import Footer from './HomePage/Footer';


function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Features />
      <JoinCommunity />
    
      <Footer />
    </div>
  );
}

export default App;