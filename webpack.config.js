const path              = require( 'path' );
const htmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
	entry  : './examples/src/js/app.js',
	output : {
		path    : path.join( __dirname, 'examples/dist' ),
		filename: 'examples.js',
	},
	module : {
		rules: [
			{
				test   : /\.(js|jsx)$/,
				loader : 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s?css$/,
				use : [ 'style-loader', 'css-loader', 'sass-loader' ],
			},
		],
	},
	plugins: [
		new htmlWebpackPlugin( {
			template: './examples/src/html/index.html',
			filename: './index.html',
		} ),
	],
	resolve: {
		extensions: [ '.js', '.jsx' ],
	},
	mode   : 'production',
};