const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge =  require('webpack-merge');
const commonConfig = require('./webpack.common')
const path = require('path');

module.exports = merge(commonConfig,{
    mode: 'production',
    output: {
        path: path.join(__dirname,'/dist'),
        filename: 'main_bundle.js'
    }
})