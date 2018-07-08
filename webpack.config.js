/* global __dirname */

var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
    dist: path.join(__dirname, 'dist'),
    src: path.join(__dirname, 'src'),
}

module.exports = {
    entry: './src/main.jsx',
    output: {
        path: PATHS.dist,
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?stage=0&optional=runtime&plugins=typecheck'],
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(jpg|png|svg|woff|woff2|ttf|eot)$/,
                loader: 'url-loader?limit=25000',
            }
        ],
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.src + '/index.ejs',
            title: 'Daniel Hess',
        })
    ],
}
