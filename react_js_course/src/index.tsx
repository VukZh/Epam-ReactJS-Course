import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Footer from "./containers/Footer";
import Main from "./containers/Main";
import Header from "./containers/Header";

const App = () => (
    <div>
        <Header/>
        <Main/>
        <Footer/>
    </div>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);