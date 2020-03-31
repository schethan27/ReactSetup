const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge =  require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');

module.exports = merge(commonConfig,{
    mode: 'development',
    output: {
        path: path.join(__dirname,'/dist'),
        filename: 'main_bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        port: 9000,
        hot: true,
        open: 'Google Chrome' //For example, 'Chrome' is 'Google Chrome' on macOS, 'google-chrome' on Linux and 'chrome' on Windows.
      }
})