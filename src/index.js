import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 1 import createStore from redux
import  {createStore} from 'redux';
// 5 import reducer 
import reducer from './reducers'
// 6 import Provider
import {Provider} from 'react-redux';

import 'bulma/css/bulma.css';
import './styles.scss';

// 7 create store pass reducer
const store = createStore(reducer)

// 2 wrap provider component around <App />
const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, rootElement);
