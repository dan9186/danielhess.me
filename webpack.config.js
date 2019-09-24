const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const PATHS = {
  dist: path.join(__dirname, 'dist'),
  src: path.join(__dirname, 'src'),
}

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules\/(?!redux-form)/, /\.story.js$/, /\.test.js$/],
        resolve: {
          extensions: ['.js', '.jsx'],
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
          loader: 'url-loader?limit=8192',
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
    new CopyWebpackPlugin([
      { from: './static/robots.txt', to: PATHS.dist },
      { from: './static/favicons', to: path.join(PATHS.dist, 'favicons') },
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      VERSION: JSON.stringify(require('./package.json').version),
      BUILD: JSON.stringify(process.env.TRAVIS_COMMIT || 'dev'),
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
    }),
  ],
}
