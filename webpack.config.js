var path = require('path');
var HtmlwebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: [
		'babel-polyfill',
		'./src/main.js'
	],
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_module/,
			options: {
				plugins: ['transform-runtime'],
				presets: ['es2015']
			},
		}, {
			test: /\.hbs/,
			loader: 'handlebars-loader'
		}]
	},
	plugins: [
		new HtmlwebpackPlugin()
	]
}