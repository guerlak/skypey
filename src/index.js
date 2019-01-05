import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import store from './store/index_store'
import * as serviceWorker from './serviceWorker';


const render = () => {
  console.log(store.getState())
    return ReactDOM.render(<App />, document.getElementById("root"));
  };
store.subscribe(render)
render();


serviceWorker.unregister();


