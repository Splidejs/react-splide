/*
 * Dependencies.
 */
const gulp          = require( 'gulp' );
const webpackStream = require( 'webpack-stream' );

/*
 * Webpack config.
 */
const config = {
	entry: './examples/src/js/app.js',
	output: {
		filename: 'examples.js',
	},
	module: {
		rules: [
			{
				test   : /\.(js|jsx)$/,
				loader : 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	resolve: {
		extensions: [ '.js', '.jsx' ],
	},
	mode: 'production',
};

/*
 * Build a script file.
 */
gulp.task( 'build:js', () => {
	return webpackStream( { config } ).pipe( gulp.dest( './examples/dist/js' ) );
} );