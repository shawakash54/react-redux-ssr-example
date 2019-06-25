const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webpackNodeExternals = require('webpack-node-externals')

const config = {
    // Inform webpack that we are building a bundle for node.js,
    // rather than for the browser
    target: 'node',
    
    // Tell webpack the root file of the server application
    entry: './src/index.js',

    // Tell webpack where to put the output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals:[
        //this will tell webpack not to bundle any libraries inside the server bundle if the library exists in the node modules folder
        webpackNodeExternals()
    ]
}

module.exports = merge(baseConfig, config)
