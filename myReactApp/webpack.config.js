var path = require('path');
var combineLoaders = require('webpack-combine-loaders');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'prod'),
        filename: 'bundle.js',
        publicPath: 'assets'
    },

    devServer: {
        port: 9562,
        historyApiFallback: true
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css?$/,
            loader: combineLoaders([{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }])
        }]
    }
}