/* global __dirname */

const path = require('path')
const webpack = require('webpack')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const RobotstxtPlugin = require("robotstxt-webpack-plugin").default

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
        }),
        new FaviconsWebpackPlugin({
            logo: PATHS.src + '/assets/logo-lg.png',
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: false,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false,
            },
        }),
        new RobotstxtPlugin({
            policy: [{
                userAgent: "*",
                disallow: "/",
            }],
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            VERSION: JSON.stringify(require("./package.json").version),
            BUILD: JSON.stringify(process.env.TRAVIS_COMMIT || 'dev'),
        })
    ],
}
