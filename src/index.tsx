import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Footer from "./containers/footer/Footer";
import Main from "./containers/main/Main";
import Header from "./containers/header/Header";

// import TestErrorBoundary from "./containers/TestErrorBoundary/TestErrorBoundary";
// import ErrorBoundary from "./containers/TestErrorBoundary/ErrorBoundary";
// import FormDelete from "./containers/formdelete/FormDelete";

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