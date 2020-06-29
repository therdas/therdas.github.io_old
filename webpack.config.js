var path = require('path');
var webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './js/main.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader" },
                    //{ loader: "postcss-loader" },
                    { loader: "sass-loader" }
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'html' }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map',
    devServer: {
        contentBase: '.',
        watchContentBase: true,
    },
};