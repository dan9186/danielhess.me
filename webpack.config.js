/* global __dirname */

const path = require('path')
const webpack = require('webpack')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const RobotstxtPlugin = require('robotstxt-webpack-plugin').default
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


const PATHS = {
  dist: path.join(__dirname, 'dist'),
  src: path.join(__dirname, 'src'),
}

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.jsx',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules\/(?!redux-form)/, /\.story.js$/, /\.test.js$/],
        resolve: {
          extensions: [".js", ".jsx"]
        },
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: 'url-loader?limit=8192',
        },
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)|\.otf($|\?)/,
        use: {
          loader: "url-loader?limit=8192",
        },
      },
    ],
  },
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 5,
      cacheGroups: {
        style: {
          test: /(styled-components|stylis)/,
          priority: 10,
        },
      },
    },
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
      logo: PATHS.src + '/assets/images/logo-lg.png',
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
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
    }),
  ],
}
