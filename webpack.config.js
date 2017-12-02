var path = require('path')

module.exports = {
	entry: './src/main.jsx',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel?stage=0&optional=runtime&plugins=typecheck'] },
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader', },
			{ test: /\.(jpg|png|svg|woff|woff2|ttf|eot)$/, loader: 'url-loader', options: { limit: 25000, }, },
		]
	},
	devtool: 'source-map',
	devServer: {
		contentBase: './dist',
		historyApiFallback: true,
	},
}
