import React from 'react';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import Aside from './components/Aside';
import { weatherApp } from './redux/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import StateTo from './components/containers/StateTo';


const store = createStore(weatherApp)

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App>
        <StateTo/>
        <Aside/>
    </App>
  </Provider>

);

reportWebVitals();
