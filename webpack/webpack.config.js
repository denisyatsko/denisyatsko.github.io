const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		publicPath: 'dist/'
	},
	devtool: 'eval-source-map',
	devServer: {
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader'
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css')
	]
};

module.exports = conf;