//const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].[contentHash].bundle.js'
    },
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
    },
    module: {
		rules: [
			{ 
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader'] 
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin({filename:'[name].[contentHash].bundle.css'}), new CleanWebpackPlugin()]
});