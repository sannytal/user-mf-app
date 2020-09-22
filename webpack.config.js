const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	mode: 'production',
	cache: true,
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: 'index.js',
		libraryTarget: 'umd'
	},
	devServer: {
		contentBase: './dist',
		historyApiFallback: true,
		publicPath: 'https://dev.example.com'
	  },
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							ignore: [/node_modules/]
						}
					}
				]
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.html$/,
				use: [
					'htmllint-loader',
					{
						loader: 'html-loader',
						options: { minimize: true }
					}
				]
			},
			{
				test: /\.(gif|eot|ttf|woff|woff2)$/,
				loader: 'url-loader',
				options: {
					limit: 1000000
				}
			},
			{
				test: /\.(png|jpg|svg)$/i,
				use: [
				  {
					loader: 'file-loader',
				  },
				],
			  },
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Caching'
    })
	],
	cache: false,
	resolve: {
		modules: ['node_modules'],
		extensions: [
			'.js',
			'.jsx',
			'.sass',
			'.scss',
			'.css',
			'.module.sass',
			'.module.scss',
			'.module.css'
		]
	},
	externals: {
		react: {
			root: 'React',
			commonjs: 'react',
			commonjs2: 'react',
			amd: 'react'
		},
		'react-dom': {
			root: 'ReactDOM',
			commonjs2: 'react-dom',
			commonjs: 'react-dom',
			amd: 'react-dom',
			umd: 'react-dom'
		},
		bootstrap: 'bootstrap',
		'react-bootstrap': 'react-bootstrap'
	}
}
