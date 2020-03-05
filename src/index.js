import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import RpsGame from './RpsGame';
import startingPage from './startingPage';


const App = () => {
    return (
        <>
            <div>
                <Switch>
                    <Route exact path="/" component={startingPage}></Route>
                    <Route exact path="/Game" component={RpsGame}></Route>
                </Switch>
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
