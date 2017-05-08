module.exports = {
    entry: { js: './src/counter.js'},
    output: { path: '/Users/satoumasaki/Documents/workspaces/taisablog.com/2017/reactdev/public/', filename: 'bundle.js'},
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
        contentBase: '/Users/satoumasaki/Documents/workspaces/taisablog.com/2017/reactdev/public/',
        port: 8080,
        inline: true,
        historyApiFallback: true
    }
};