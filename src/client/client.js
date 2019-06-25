// root for the client side code bases

import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'

ReactDOM.hydrate(<Home/>, document.querySelector('#root'))
