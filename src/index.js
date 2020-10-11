import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './store'
import WebSocketProvider, { WebSocketContext } from './components/Socket/index';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

      {/* TO MAKE SOCKET WORK WE NEED TO JUST UNCOMMENT THE WEB SOCKET PROVIDER COMPONENT */}
    {/* <WebSocketProvider> */}
    <App />
    {/* </WebSocketProvider> */}

    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
