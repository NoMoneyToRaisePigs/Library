
module.exports = {
	entry: ["./src/main-aot"],
	output: {
		path: __dirname + "/prod",
		filename: "bundle.js",
		chunkFilename: '[name]-chunk.js',
	},
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: ["awesome-typescript-loader","angular-router-loader"]
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            }   
		]
	},

	resolve: {
		extensions: ['.ts','.js']
    },
    devtool:"source-map"
}