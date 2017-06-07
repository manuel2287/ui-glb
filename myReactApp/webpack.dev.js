var Merge = require('webpack-merge');
var common = require('./webpack.common.js');
var path = require('path');
const dev = (env) => {
    return Merge(common, {
        entry: './src/index.jsx',
        output: {
            path: path.resolve(__dirname, 'prod'),
            filename: 'bundle.js',
            publicPath: 'assets'
        },

        devServer: {
            port: 9562,
            historyApiFallback: true
        }
    });
}

module.exports = dev();