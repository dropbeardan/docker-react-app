var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/app.tsx',
	output: {
		filename: '[name].bundle.js',
		path: __dirname + '/dist'
	},

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: ['.ts', '.tsx', '.js', '.json']
	},

	mode: 'production',

	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			}
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					chunks: 'initial',
					name: 'vendor',
					enforce: true
				}
			}
		}
	},

	plugins: [
		new CopyWebpackPlugin([
			{ from: './src/index.html', to: __dirname + '/dist' }
		])
	]
};
