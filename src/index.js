import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'
import * as reducers from './state/reducers';

import 'bulma/css/bulma.css';
import './styles.scss';

const monsterReducer = combineReducers({
  carFeatures: reducers.carFeaturesReducer
})

// const monsterStore = createStore(monsterReducer)
const monsterStore = createStore(reducers.carFeaturesReducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={ monsterStore } >
  <App />
</Provider>, rootElement);
