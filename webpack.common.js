const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader','css-loader', 'sass-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif|woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'resources/assets'
                    }
                  }
                ]
            }
        ]
    }
}
