// root file for the application in server
// here we are using commonjs syntax

const express = require('express')
const React = require('react')
const renderToString = require('react-dom/server').renderToString
const Home = require('./client/components/Home').default
const app = express()

app.get('/', (req, res) => {
    const content = renderToString(<Home/>)
    
    res.send(content)
})

app.listen(3000, ()=>{
    console.log(`listening on port 3000`)
})
