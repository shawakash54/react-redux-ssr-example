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
import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes'

const app = express()

// tell express to freely serve the public folder, to treat it as static
app.use(express.static('public'))


app.get('*', (req, res) => {
    const store = createStore()

    //logic to initialize and load data to the store
    //only after loading data into the store, will we render the string
    //invoke loadData for each matched route
    //the following will return an array of network promises

    const promises = matchRoutes(Routes, req.path).map(({route}) => {
        return route.loadData ? route.loadData(store) : null
    })

    //Promises.all() takes an array of promises and returns 1 promise. As soon as all the promises in the array are resolved, the
    // new returned promise will be resolved as well
    //render the app when all data loading functions are present
    Promise.all(promises).then(() => {
        res.send(renderer(req, store))
    })
})

app.listen(3000, ()=>{
    console.log(`listening on port 3000`)
})
