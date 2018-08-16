import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import login from './reducers';

const store = createStore(
    login
)

ReactDOM.render(
    <Provider store={store}>
        <App /></Provider>, document.getElementById('root'));

registerServiceWorker();