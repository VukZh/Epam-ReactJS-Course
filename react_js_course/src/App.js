import React from 'react';
import './App.css';
import BtnInc from "./components/buttonInc";
import CounterValue from "./components/counterValue";
import BtnDec from "./components/buttonDec";
import GenreToggle from "./components/genreToggle";
import SearchInput from "./components/searchInput";

function App() {

  return (
    <div className="App">
      <div/>
      <BtnInc/>
      <CounterValue value={123}></CounterValue>
      <BtnDec/>
      <div/>
      <GenreToggle/>
      <div/>
      <div/>
      <SearchInput/>
    </div>
  );
}

export default App;
