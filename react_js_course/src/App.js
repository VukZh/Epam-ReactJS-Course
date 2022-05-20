import React from 'react';
import './App.css';
import GenreToggle from "./components/genreToggle";
import SearchInput from "./components/searchInput";
import header from "./components/header";
import Counter from "./components/counter/counter";

function App() {

  return (
    <div className="App">
      {header("Hello React!!!")}
      <div/>
      <Counter startCount={5}/>
      <div/>
      <GenreToggle/>
      <div/>
      <div/>
      <SearchInput/>
    </div>
  );
}

export default App;
