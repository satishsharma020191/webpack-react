const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: {
		main :path.resolve(__dirname, 'src/Index.js'),
		vendor :path.resolve(__dirname, 'src/vendor.js')
	},

	devServer: {
		port: 4000,
		contentBase: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
				  {
					loader: 'file-loader',
					options: {
						name: "[name].[hash].[ext]",
						outputPath: "imgs"
					}
				  },
				],
			  },

		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			filename: 'index.html'
		})
	]
};