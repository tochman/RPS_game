import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import RpsGame from './RpsGame';


const App = () => {
    return (
        <>
            <div>
                <Switch>
                    <Route exact path="/" component={RpsGame}></Route>
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
