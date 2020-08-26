//const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    module: {
		rules: [
			{ 
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ['style-loader','css-loader', 'sass-loader'] 
            }
        ]
    }
});