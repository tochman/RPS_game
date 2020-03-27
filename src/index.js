import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import RpsGame from './RpsGame';


const App = () => {
    return (
        <>
            <div>
            <h1>CHOOSE YOUR KID!</h1>
            <RpsGame />
            </div>
        </>
    );
};


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));
serviceWorker.unregister();
