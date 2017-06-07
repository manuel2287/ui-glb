var Merge = require('webpack-merge');
var common = require('./webpack.common.js');

module.exports = function(env, version) {
    return Merge(common, {
        entry: './src/index.jsx',
        output: {
            path: path.resolve(__dirname, 'prod'),
            filename: 'bundle-.[version].js'
        },
        plugin: [
            new webpack.optimize.UglifyJsPlugin({
                comments: false
            })
        ]
    });
}