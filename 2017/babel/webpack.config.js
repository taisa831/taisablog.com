module.exports = {
    entry: { js: './src/main.js'},
    output: { path: '/Users/satoumasaki/Documents/workspaces/taisablog.com/2017/0427/public/', filename: 'bundle.js'},
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
        contentBase: '/Users/satoumasaki/Documents/workspaces/taisablog.com/2017/0427/public/',
        port: 8080,
        inline: true,
        historyApiFallback: true
    }
};