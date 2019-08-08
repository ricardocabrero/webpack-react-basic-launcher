const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
//const cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'

module.exports = {

    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },

    entry: ['./src/index.js'],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    devServer: {
        port: 4000,
        inline: true
    },

    module: {
        rules: [
            { 
                test: /(\.js|jsx)$/, 
                exclude: /node_modules/ , 
                loader: 'babel-loader'
            },
            { 
                test: /\.css$/, 
                loader: ['style-loader','css-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ]

}