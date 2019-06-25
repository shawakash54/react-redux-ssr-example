// root file for the application in server
// here we are using commonjs syntax

// const express = require('express')
// const React = require('react')
// const renderToString = require('react-dom/server').renderToString
// const Home = require('./client/components/Home').default

import 'babel-polyfill'
import express from 'express'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express()

// tell express to freely serve the public folder, to treat it as static
app.use(express.static('public'))


app.get('*', (req, res) => {
    const store = createStore()

    //logic to initialize and load data to the store
    //only after loading data into the store, will we render the string

    res.send(renderer(req, store))
})

app.listen(3000, ()=>{
    console.log(`listening on port 3000`)
})
