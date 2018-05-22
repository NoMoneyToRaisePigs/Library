
module.exports = {
	entry: ["./src/main"],
	output: {
		filename: "bundle.js",
		chunkFilename: '[name]-chunk.js',
	},
	module: {
		loaders: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: ["ts-loader","angular-router-loader"]
			}
		]
	},

	resolve: {
		extensions: ['.ts','.js']
    },
    devtool:"source-map"
}