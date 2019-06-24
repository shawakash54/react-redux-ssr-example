const path = require('path')

module.exports = {
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

    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',  // Takes all the jsx and converts to js function calls
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions']}}] // target atleast last 2 versions of all the browsers
                    ]
                }
            }
        ]
    }
}
