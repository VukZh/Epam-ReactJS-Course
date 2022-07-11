import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Footer from "./containers/Footer/Footer";
import Main from "./containers/Main/Main";
import Header from "./containers/Header/Header";

// import TestErrorBoundary from "./containers/TestErrorBoundary/TestErrorBoundary";
// import ErrorBoundary from "./containers/TestErrorBoundary/ErrorBoundary";
// import FormDelete from "./containers/FormDelete/FormDelete";

const App = () => (
    <div>
        <Header/>
        {/*<ErrorBoundary>*/}
        {/*    <TestErrorBoundary/>*/}
        {/*</ErrorBoundary>*/}
        <Main/>
        <Footer/>
        <div></div>
    </div>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);