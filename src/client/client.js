// root for the client side code bases

import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' //to control asynchronous action creators
import { Provider } from 'react-redux' //ties the store in the react side of the application.
import reducers from './reducers'
import { renderRoutes } from 'react-router-config' //takes an array of routes objects, turns them into route components and returns them

const store = createStore(
    reducers,
    window.INITIAL_STATE,
    applyMiddleware(thunk)
)

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)
