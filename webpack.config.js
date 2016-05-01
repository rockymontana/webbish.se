var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    context: __dirname,
    entry: [
        'webpack-hot-middleware/client',
        './client/client.js',
        './assets/less/styles.less'
    ],
    output: {
        path: require("path").resolve("./build"),
        filename: 'js/app.js',
        publicPath: '/assets/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('css/app.css', {
            allChunks: true
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                presets: ['react', 'es2015', 'react-hmre']
                }
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader"),
                exclude: /node_modules/,
            },
            { test: /\.(png|jpg|svg|gif)$/, loader: "url-loader?limit=8192" }
        ]
    }
}

