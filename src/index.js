import React from 'react';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import Main from './components/Main';
import Aside from './components/Aside';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <App>
    <Main></Main>
    <Aside></Aside>
  </App>
);

reportWebVitals();
