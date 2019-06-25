module.exports = {
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
