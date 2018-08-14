
module.exports = {
	entry: ["./src/ployfills","./src/main"],
	output: {
		path: __dirname + "/prod",
		filename: "[name].js",
		chunkFilename: '[name]-chunk.js'
		//publicPath:'/prod/'
	},
	module: {
		loaders: [
			{
				test: /\.html$/,
				loader: ["raw-loader"]
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: ["awesome-typescript-loader","angular-router-loader","angular2-template-loader"]
			}
		]
	},

	resolve: {
		extensions: ['.ts','.js']
    },
    devtool:"source-map"
}