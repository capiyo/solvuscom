import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Context } from './components/ContextProvider/Context';
import { ToastContainer, toast } from 'react-toastify';
import  {Provider} from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import {Finder} from './components/Finder/Finder';
import { FeaturedJobs } from './components/Home/FeaturedJobs';
import { reducers } from './components/ReduxPages/reducers';
import  {thunk} from 'redux-thunk';
import { Login } from './components/Login/Login';
import { Sidebar } from 'lucide-react';
import Index from './components/Home/index'

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <Context>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Context>q
  </Provider>
);

