const path = require('path');

module.exports = {
    entry: { js: './src/counter-flux.js'},
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        port: 8080,
        inline: true,
        historyApiFallback: true
    }
};