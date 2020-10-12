import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from './Redux/reducer'

const store = createStore(reducer);




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div>
        <App />
      </div>
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
);
