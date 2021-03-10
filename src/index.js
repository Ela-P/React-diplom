import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./routs/Routes";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";


import { configureStore } from './store/configureStore';

const store = configureStore();



ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}> 
      <BrowserRouter>
      <Routes/>
      </BrowserRouter> 
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

