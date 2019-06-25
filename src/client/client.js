// root for the client side code bases

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' //to control asynchronous action creators
import { Provider } from 'react-redux' //ties the store in the react side of the application.

const store = createStore(reducers, {}, applyMiddleware(thunk))

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)
