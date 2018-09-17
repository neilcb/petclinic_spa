import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

//import { createStore } from "redux";
//import rootReducer from "../reducers/index";
//const store = createStore(rootReducer);
//export default store;

render((
		  <BrowserRouter>
		    <App />
		  </BrowserRouter>
		), document.getElementById('root'));
registerServiceWorker();
