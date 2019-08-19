import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RecipeContextProvider from './contexts/RecipeContext';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
    <RecipeContextProvider>
        <Router>
            <App />
        </Router>
    </RecipeContextProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
